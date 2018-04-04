import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';
import InputField from '@indec/react-native-md-textinput';

import {requestLogin, requestToken} from '../../actions/session';
import Button from '../Button';
import styles from './styles';

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        requestToken: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired,
        userProfile: PropTypes.string,
        differentUser: PropTypes.bool
    };

    static defaultProps = {
        failed: false,
        loading: false,
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
                <Fragment>
                    <Text style={styles.wrongPasswordText}>
                        Está ingresando con un usuario diferente al último que inició sesión.{'\n'}
                        De continuar con el login se perderán todas las encuestas que no hayan sido sincronizadas.{'\n'}
                        Si desea continuar toque el siguiente hipervínculo:{'\n'}
                    </Text>
                    <Text onPress={() => this.continueChangeUser()} style={styles.cleanSurveysText}>
                        Descartar encuestas del usuario anterior e ingresar al sistema
                    </Text>
                </Fragment>}
            </Fragment>
        );
    }

    render() {
        const {loading} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Iniciar Sesión
                </Text>
                {loading && <ActivityIndicator animating color="#008bc7"/>}
                {!loading && this.renderContent()}
            </View>
        );
    }
}

export default connect(
    state => ({
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
