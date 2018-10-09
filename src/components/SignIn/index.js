import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    ActivityIndicator, Image, Text, View
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import InputField from '@indec/react-native-md-textinput';
import {isEmpty} from 'lodash';

import {requestLogin, requestToken} from '../../actions/session';
import Button from '../Button';
import imagePropType from '../../util/imagePropType';
import getFontAwesome from '../../util/getFontAwesome';
import styles from './styles';

const renderErrorMessages = (failed, showCompleteUserAndPassword) => (
    <View style={styles.errorText}>
        {failed && !showCompleteUserAndPassword && (
            <Text>
                Usuario y/o contraseña inválidos
            </Text>
        )}
        {showCompleteUserAndPassword && (
            <Text style={styles.errorText}>
                Debe completar el usuario y la contraseña
            </Text>
        )}
    </View>
);

const changeUserMessage = changeUserText => (
    <View style={styles.changeUserText}>
        {changeUserText ? (
            <Text>
                {changeUserText}
            </Text>
        ) : (
            <Text style={styles.helpText}>
                Está ingresando con un usuario diferente al último que inició sesión.
                {'\n'}
                De continuar con el login se perderán todas los datos que no hayan sido sincronizados.
                {'\n'}
                Si desea continuar toque el siguiente botón:
            </Text>
        )}
    </View>
);

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        requestToken: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        logged: PropTypes.bool,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired,
        userProfile: PropTypes.string,
        lastUserLogged: PropTypes.string,
        changeUserText: PropTypes.string,
        image: imagePropType
    };

    static defaultProps = {
        failed: false,
        loading: false,
        image: null,
        logged: false,
        userProfile: null,
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
        this.props.requestToken();
    }

    requestLogin() {
        const {redirectUri, authEndpoint, userProfile} = this.props;
        const {username, password} = this.state;
        this.setState(() => ({
            showCompleteUserAndPassword: false,
            showChangeUserMessage: false
        }));
        this.props.requestLogin({
            username,
            password
        }, authEndpoint, redirectUri, userProfile);
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
                <View style={styles.inputWrapper}>
                    <InputField
                        inputStyle={styles.textStyle}
                        label="Usuario"
                        keyboardType="default"
                        highlightColor="#e32439"
                        autoCapitalize="none"
                        onChangeText={text => this.setState(() => ({username: text}))}
                        value={username}
                    />
                    <InputField
                        inputStyle={styles.textStyle}
                        label="Contraseña"
                        keyboardType="default"
                        highlightColor="#e32439"
                        autoCapitalize="none"
                        onChangeText={text => this.setState(() => ({password: text}))}
                        value={password}
                        secureTextEntry
                    />
                </View>
                {renderErrorMessages(failed, showCompleteUserAndPassword)}
                <Button
                    primary
                    title="Ingresar"
                    onPress={() => this.handleSubmit()}
                    buttonStyle={styles.submitButton}
                />
                {showChangeUserMessage && (
                    <View style={styles.changeUserContainer}>
                        {changeUserMessage(changeUserText)}
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
                <Icon {...getFontAwesome('unlock')} size={32} color="#333"/>
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
        requestLogin: (user, authEndpoint, redirectUri, userProfile) => dispatch(
            requestLogin(user, authEndpoint, redirectUri, userProfile)
        ),
        requestToken: () => dispatch(requestToken())
    })
)(SignIn);
