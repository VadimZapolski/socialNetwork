import React from 'react';
import  {Field,reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls/FormControls';
import {requiredField} from '../../utils/validators/validators';


export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       validate={[requiredField]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[requiredField]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;