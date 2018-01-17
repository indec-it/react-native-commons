import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';
import InputField from '@indec/react-native-md-textinput';
import styles from './styles';

import {Button, getFontAwesome, TextStrong} from '../../';

import {requestLogin, requestToken} from '../../actions/session';

class SignIn extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        requestLogin: PropTypes.func.isRequired,
        requestToken: PropTypes.func.isRequired,
        logged: PropTypes.bool,
        loading: PropTypes.bool,
        token: PropTypes.string
    };

    static defaultProps = {
        logged: null,
        loading: null,
        token: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            wrongPass: false
        };
    }

    componentDidMount() {
        this.props.requestToken();
    }

    componentWillReceiveProps(nextProps) {
        const {token, logged} = nextProps;
        if (token || logged) {
            this.props.history.push('/area');
            return;
        }
        this.setState(
            () => ({wrongPass: true, password: ''})
        );
    }

    handleSubmit() {
        const {username, password} = this.state;
        if (!username || !password) {
            return this.setState(() => ({wrongPass: true}));
        }
        return this.props.requestLogin({username, password});
    }

    showInputsAndButton() {
        const {wrongPass, username, password} = this.state;
        return (
            <View>
                <InputField
                    inputStyle={styles.singIn.input.field}
                    wrapperStyle={styles.singIn.input.wrapper}
                    label="Usuario"
                    keyboardType="default"
                    highlightColor="#ff4281"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({username: text}))}
                    value={username}
                />
                <InputField
                    inputStyle={styles.singIn.input.field}
                    wrapperStyle={styles.singIn.input.wrapper}
                    label="Contraseña"
                    keyboardType="default"
                    highlightColor="#ff4281"
                    autoCapitalize="none"
                    onChangeText={text => this.setState(() => ({password: text}))}
                    value={password}
                    secureTextEntry
                />
                {wrongPass &&
                    <TextStrong style={styles.singIn.incorrectSingInText}>
                        Usuario y/o contraseña inválidos
                    </TextStrong>
                }
                <Button
                    title="Ingresar"
                    icon={getFontAwesome('lock')}
                    onPress={() => this.handleSubmit()}
                    rounded
                    primary
                    buttonStyle={styles.singIn.submitButton}
                />
            </View>
        );
    }

    render() {
        const {loading} = this.props;
        return (
            <View style={[styles.singIn.container, styles.container]}>
                <Text style={styles.singIn.textTitle}>
                    RFK
                </Text>
                <Text style={styles.singIn.textTitle}>
                    Iniciar Sesión
                </Text>
                {loading && <ActivityIndicator animating size="large" color="#008BC7"/>}
                {!loading && this.showInputsAndButton()}
            </View>
        );
    }
}

export default connect(
    state => ({
        logged: state.session.logged,
        loading: state.session.loading,
        token: state.session.token
    }),
    dispatch => ({
        requestLogin: user => dispatch(requestLogin(user)),
        requestToken: () => dispatch(requestToken())
    })
)(SignIn);
