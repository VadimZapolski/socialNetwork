import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../Common/FormControls/FormControls';
import {maxLengthCreator, requiredField} from '../../utils/validators/validators';


const Dialogs = (props: any) => {


    let dialogsElements = props.dialogs.map((props: any) =>
        <DialogItem name={props.name} id={props.id}/>);

    let messagesElements = props.messages.map((props: any) =>
        <Message message={props.message}/>)

    let newMessageBody = props.newMessageBody;


    let addNewMessage  = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <img src='https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png'/>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField,maxLength50]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)
export default Dialogs;
