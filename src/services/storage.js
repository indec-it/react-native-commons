import {AsyncStorage} from 'react-native';
import {filter, isArray, isEmpty, map, startsWith} from 'lodash';

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

    async findById(id) {
        return JSON.parse(await AsyncStorage.getItem(createKey(this.prefix, id)));
    }

    async findAll() {
        const keys = await getAllKeys(this.prefix);
        if (isEmpty(keys)) {
            return null;
        }
        return map(await AsyncStorage.multiGet(keys), result => JSON.parse(result[1]));
    }

    async save(objects, keySelector) {
        if (!isArray(objects)) {
            return AsyncStorage.setItem(
                createKey(this.prefix, keySelector(objects)),
                JSON.stringify(objects)
            );
        }
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

    async remove(ids) {
        if (isEmpty(ids)) {
            return null;
        }
        return AsyncStorage.multiRemove(
            map(ids, id => `${this.prefix}${id}`)
        );
    }

    async removeAll() {
        const keys = await getAllKeys(this.prefix);
        if (isEmpty(keys)) {
            return null;
        }
        return AsyncStorage.multiRemove(keys);
    }
}
