import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';
import InputField from '@indec/react-native-md-textinput';

import {Button, getFontAwesome, TextStrong} from '../..';
import {requestLogin, requestToken} from '../../actions/session';
import styles from './styles';

class SignIn extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        requestToken: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired
    };

    static defaultProps = {
        failed: false,
        loading: false
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

    handleSubmit() {
        const {username, password} = this.state;
        if (!username || !password) {
            return;
        }
        const {redirectUri, authEndpoint} = this.props;
        this.props.requestLogin({
            username,
            password
        }, authEndpoint, redirectUri);
    }

    renderContent() {
        const {failed} = this.props;
        const {username, password} = this.state;
        return (
            <Fragment>
                <InputField
                    inputStyle={styles.input}
                    wrapperStyle={styles.inputWrapper}
                    label="Usuario"
                    keyboardType="default"
                    highlightColor="#ff4281"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({username: text}))}
                    value={username}
                />
                <InputField
                    inputStyle={styles.input}
                    wrapperStyle={styles.inputWrapper}
                    label="Contraseña"
                    keyboardType="default"
                    highlightColor="#ff4281"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({password: text}))}
                    value={password}
                    secureTextEntry
                />
                {failed &&
                <TextStrong style={styles.wrongPasswordText}>
                    Usuario y/o contraseña inválidos
                </TextStrong>}
                <Button
                    title="Ingresar"
                    icon={getFontAwesome('lock')}
                    onPress={() => this.handleSubmit()}
                    rounded
                    primary
                    buttonStyle={styles.submitButton}
                />
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
        loading: state.session.loading
    }),
    dispatch => ({
        requestLogin: (user, authEndpoint, redirectUri) => dispatch(requestLogin(user, authEndpoint, redirectUri)),
        requestToken: () => dispatch(requestToken())
    })
)(SignIn);
