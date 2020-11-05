import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls/FormControls';
import {requiredField} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/Auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../Common/FormControls/FormControls.module.css'


export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[requiredField]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[requiredField]}
                       component={Input}
                       type={'password'}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={style.formSummuryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state:any) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {login})(Login);