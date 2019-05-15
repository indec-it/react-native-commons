import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    ActivityIndicator, Image, Text, View
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import InputField from '@indec/react-native-md-textinput';

import {
    requestLogin, requestFetchToken, requestValidateUser, cleanUserValidations
} from '../../actions/session';
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
        requestValidateUser: PropTypes.func.isRequired,
        cleanUserValidations: PropTypes.func.isRequired,
        clientId: PropTypes.string.isRequired,
        clientSecret: PropTypes.string.isRequired,
        redirectUri: PropTypes.string.isRequired,
        authEndpoint: PropTypes.string.isRequired,
        lastUserLogged: PropTypes.string,
        changeUserText: PropTypes.string,
        image: imagePropType,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        logged: PropTypes.bool,
        incompleteUserOrPassword: PropTypes.bool,
        confirmChangeUser: PropTypes.bool,
        isUserValid: PropTypes.bool
    };

    static defaultProps = {
        failed: false,
        loading: false,
        image: null,
        logged: false,
        incompleteUserOrPassword: false,
        confirmChangeUser: false,
        isUserValid: false,
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
        this.props.cleanUserValidations();
        this.props.requestFetchToken();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isUserValid && this.props.isUserValid) {
            this.requestLogin();
        }
    }

    requestLogin() {
        const {
            redirectUri, authEndpoint, clientId, clientSecret
        } = this.props;
        const {username, password} = this.state;
        this.props.requestLogin({
            username,
            password
        }, authEndpoint, redirectUri, {clientId, clientSecret});
    }

    handleSubmit() {
        const {lastUserLogged} = this.props;
        const {username, password} = this.state;
        this.props.requestValidateUser(username, password, lastUserLogged);
    }

    renderContent() {
        const {
            failed, changeUserText, incompleteUserOrPassword, confirmChangeUser
        } = this.props;
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
                <ErrorLoginMessages {...{failed, incompleteUserOrPassword}}/>
                <Button
                    title="Ingresar"
                    onPress={() => this.handleSubmit()}
                    rounded
                    buttonStyle={styles.submitButton}
                />
                {confirmChangeUser && (
                    <View style={styles.changeUserContainer}>
                        <ChangeUserMessage text={changeUserText}/>
                        <Button
                            title="Descartar datos del usuario anterior e ingresar al sistema"
                            rounded
                            danger
                            onPress={() => this.requestLogin()}
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
        lastUserLogged: state.session.lastUserLogged,
        incompleteUserOrPassword: state.session.incompleteUserOrPassword,
        confirmChangeUser: state.session.confirmChangeUser,
        isUserValid: state.session.isUserValid
    }),
    dispatch => ({
        requestLogin: (user, authEndpoint, redirectUri, clientCredentials) => dispatch(
            requestLogin(user, authEndpoint, redirectUri, clientCredentials)
        ),
        requestFetchToken: () => dispatch(requestFetchToken()),
        requestValidateUser: (username, password, lastUserLogged) => dispatch(
            requestValidateUser(username, password, lastUserLogged)
        ),
        cleanUserValidations: () => dispatch(cleanUserValidations())
    })
)(SignIn);
