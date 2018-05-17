/* eslint-disable no-param-reassign */
import {AsyncStorage} from 'react-native';
import {castArray, filter, isEmpty, map, size, startsWith} from 'lodash';

const getAllKeys = async prefix => filter(
    await AsyncStorage.getAllKeys(),
    key => startsWith(key, prefix)
);

const createKey = (prefix, id) => `${prefix}${id}`;

export default class StorageService {
    constructor(collection) {
        this.collection = collection;
        this.prefix = `${collection}:`;
    }

    /**
     * Find the item based on the given id.
     * @param {String|Number} id The ID to lookup into the collection.
     * @returns {Promise<any>}
     */
    async findById(id) {
        return JSON.parse(await AsyncStorage.getItem(createKey(this.prefix, id)));
    }

    async findOne() {
        const keys = await getAllKeys(this.prefix);
        if (isEmpty(keys)) {
            return [];
        }
        return JSON.parse(await AsyncStorage.getItem(keys[0]));
    }

    /**
     * Fetch all the items on the collection.
     * @returns {Promise<Array<any>>} A promise with the found items.
     */
    async findAll() {
        const keys = await getAllKeys(this.prefix);
        if (isEmpty(keys)) {
            return [];
        }
        return map(
            await AsyncStorage.multiGet(keys),
            result => JSON.parse(result[1])
        );
    }

    /**
     * Saves one or more items into the collection.
     * @param {Array<any>|any} objects One or more object to be saved.
     * @param {Function} keySelector The key selector to generate the item ID.
     * @returns {Promise<void>} A promise when the save is completed.
     */
    async save(objects, keySelector) {
        objects = castArray(objects);
        if (isEmpty(objects)) {
            return null;
        }
        return AsyncStorage.multiSet(
            map(
                objects,
                object => [createKey(this.prefix, keySelector(object)), JSON.stringify(object)]
            )
        );
    }

    /**
     * Removes one or more items from the collection.
     * @param {Array<String>|Array<Number>|String|Number} ids One or more IDs to be removed.
     * @returns {Promise<void>} A promise when the remove is completed.
     */
    async remove(ids) {
        ids = castArray(ids);
        if (isEmpty(ids)) {
            return null;
        }
        return AsyncStorage.multiRemove(
            map(ids, id => createKey(this.prefix, id))
        );
    }

    /**
     * Removes all the items into the collection.
     * @returns {Promise<void>} A promise when the remove is completed.
     */
    async removeAll() {
        const keys = await getAllKeys(this.prefix);
        if (isEmpty(keys)) {
            return null;
        }
        return AsyncStorage.multiRemove(keys);
    }

    /**
     * Retrieves the count of items into the collection.
     * @returns {Promise<Number>} A promise with the count of items into the collection.
     */
    async count() {
        return size(await getAllKeys(this.prefix));
    }
}
