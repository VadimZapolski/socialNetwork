import React, {FormEvent} from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls/FormControls';
import {requiredField} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/Auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../Common/FormControls/FormControls.module.css'
import {AppStateType} from '../../redux/Redux-store';

type LoginFormType = {
    handleSubmit:any
    error: string
}

export const LoginForm = (props: LoginFormType) => {
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

const LoginReduxForm = reduxForm <LoginValueType>({
    form: 'login'
})(LoginForm)

type MapStatePropsType = {
    //captchaUrl:string | null
        isAuth:boolean
}

type MapDispatchPropsType = {
    login: (email:string, password: string, rememberMe:boolean) => void
}

type LoginValueType = {
    email:string,
    password: string,
    rememberMe:boolean
}
const Login: React.FC<MapStatePropsType&MapDispatchPropsType > = (props) => {
    const onSubmit = (formData: LoginValueType) => {
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
const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.authReducer.isAuth
    //captchaUrl:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);