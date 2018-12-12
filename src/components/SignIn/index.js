import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    ActivityIndicator, Image, Text, View
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import InputField from '@indec/react-native-md-textinput';
import {isEmpty} from 'lodash';

import {requestLogin, requestFetchToken} from '../../actions/session';
import Button from '../Button';
import ChangeUserMessage from './ChangeUserMessage';
import ErrorLoginMessages from './ErrorLoginMessages';
import imagePropType from '../../util/imagePropType';
import getFontAwesome from '../../util/getFontAwesome';
import styles from './styles';

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        requestFetchToken: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        logged: PropTypes.bool,
        clientId: PropTypes.string.isRequired,
        clientSecret: PropTypes.string.isRequired,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired,
        lastUserLogged: PropTypes.string,
        changeUserText: PropTypes.string,
        image: imagePropType
    };

    static defaultProps = {
        failed: false,
        loading: false,
        image: null,
        logged: false,
        lastUserLogged: null,
        changeUserText: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        this.props.requestFetchToken();
    }

    requestLogin() {
        const {
            redirectUri, authEndpoint, clientId, clientSecret
        } = this.props;
        const {username, password} = this.state;
        this.setState(() => ({
            showCompleteUserAndPassword: false,
            showChangeUserMessage: false
        }));
        this.props.requestLogin({
            username,
            password
        }, authEndpoint, redirectUri, {clientId, clientSecret});
    }

    handleSubmit() {
        const {username, password} = this.state;
        if (isEmpty(username) || isEmpty(password)) {
            return this.setState(() => ({
                showCompleteUserAndPassword: true,
                showChangeUserMessage: false
            }));
        }
        const {lastUserLogged} = this.props;
        return lastUserLogged && lastUserLogged !== username
            ? this.setState(() => ({
                showChangeUserMessage: true,
                showCompleteUserAndPassword: false
            }))
            : this.requestLogin();
    }

    continueChangeUser() {
        this.setState(() => ({showChangeUserMessage: false}));
        this.requestLogin();
    }

    renderContent() {
        const {failed, changeUserText} = this.props;
        const {
            username, password, showChangeUserMessage, showCompleteUserAndPassword
        } = this.state;
        return (
            <Fragment>
                <InputField
                    wrapperStyle={styles.inputWrapper}
                    inputStyle={styles.textStyle}
                    label="Usuario"
                    keyboardType="default"
                    highlightColor="#d00000"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({username: text}))}
                    value={username}
                />
                <InputField
                    wrapperStyle={styles.inputWrapper}
                    inputStyle={styles.textStyle}
                    label="Contraseña"
                    keyboardType="default"
                    highlightColor="#d00000"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({password: text}))}
                    value={password}
                    secureTextEntry
                />
                <ErrorLoginMessages {...{failed, showCompleteUserAndPassword}}/>
                <Button
                    title="Ingresar"
                    onPress={() => this.handleSubmit()}
                    rounded
                    buttonStyle={styles.submitButton}
                />
                {showChangeUserMessage && (
                    <View style={styles.changeUserContainer}>
                        <ChangeUserMessage {...{changeUserText}}/>
                        <Button
                            title="Descartar datos del usuario anterior e ingresar al sistema"
                            rounded
                            danger
                            onPress={() => this.continueChangeUser()}
                        />
                    </View>
                )}
            </Fragment>
        );
    }

    render() {
        const {loading, image} = this.props;
        return (
            <View style={styles.container}>
                {image && <Image source={image} style={styles.image}/>}
                <Icon {...getFontAwesome('lock')} size={32}/>
                <Text style={styles.text}>
                    Iniciar Sesión
                </Text>
                {loading ? <ActivityIndicator animating size="large" color="#008bc7"/> : this.renderContent()}
            </View>
        );
    }
}

export default connect(
    state => ({
        logged: state.session.logged,
        failed: state.session.failed,
        loading: state.session.loading,
        lastUserLogged: state.session.lastUserLogged
    }),
    dispatch => ({
        requestLogin: (user, authEndpoint, redirectUri, clientCredentials) => dispatch(
            requestLogin(user, authEndpoint, redirectUri, clientCredentials)
        ),
        requestFetchToken: () => dispatch(requestFetchToken())
    })
)(SignIn);
