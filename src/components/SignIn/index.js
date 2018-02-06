import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import InputField from '@indec/react-native-md-textinput';
import {Icon} from 'react-native-elements';

import {requestLogin, requestToken} from '../../actions/session';
import Button from '../Button';
import imagePropType from '../../util/imagePropType';
import getFontAwesome from '../../util/getFontAwesome';
import styles from './styles';

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        requestToken: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        logged: PropTypes.bool,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired,
        image: imagePropType,
        userProfile: PropTypes.string,
        differentUser: PropTypes.bool
    };

    static defaultProps = {
        failed: false,
        loading: false,
        image: null,
        logged: false,
        userProfile: null,
        differentUser: false
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

    hasUserAndPassword() {
        const {username, password} = this.state;
        return username && password;
    }

    handleSubmit() {
        const {username, password} = this.state;
        if (this.hasUserAndPassword()) {
            const {redirectUri, authEndpoint, userProfile} = this.props;
            this.props.requestLogin({
                username,
                password
            }, authEndpoint, redirectUri, userProfile);
        }
    }

    continueChangeUser() {
        const {username, password} = this.state;
        if (this.hasUserAndPassword()) {
            const {redirectUri, authEndpoint, userProfile} = this.props;
            this.props.requestLogin({
                username,
                password
            }, authEndpoint, redirectUri, userProfile, true);
        }
    }

    renderContent() {
        const {failed, differentUser} = this.props;
        const {username, password} = this.state;
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
                {failed &&
                <Text style={styles.wrongPasswordText}>
                    Usuario y/o contraseña inválidos
                </Text>}
                <Button
                    title="Ingresar"
                    onPress={() => this.handleSubmit()}
                    rounded
                    buttonStyle={styles.submitButton}
                />
                {differentUser &&
                <View style={styles.differentUserContainer}>
                    <Text style={styles.differentUserText}>
                        Está ingresando con un usuario diferente al último que inició sesión.{'\n'}
                        De continuar con el login se perderán todas las encuestas que no hayan sido sincronizadas.{'\n'}
                        Si desea continuar oprima el siguiente botón:{'\n'}
                    </Text>
                    <Button
                        danger
                        onPress={() => this.continueChangeUser()}
                        title="Descartar encuestas del usuario anterior e ingresar al sistema"
                    />
                </View>}
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
                {loading && <ActivityIndicator animating size="large" color="#008bc7"/>}
                {!loading && this.renderContent()}
            </View>
        );
    }
}

export default connect(
    state => ({
        logged: state.session.logged,
        failed: state.session.failed,
        loading: state.session.loading,
        differentUser: state.session.differentUser
    }),
    dispatch => ({
        requestLogin: (user, authEndpoint, redirectUri, userProfile, changeUser) => dispatch(
            requestLogin(user, authEndpoint, redirectUri, userProfile, changeUser)
        ),
        requestToken: () => dispatch(requestToken())
    })
)(SignIn);
