import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { Redirect } from "react-router-dom";

// type  dialogsType = {
//     id: number;
//     name: string;
// }
// type messagesType = {
//     id: number;
//     message: string
// }
// type DialogsType = {
//     state: {
//         dialogs: Array<dialogsType>,
//         messages: Array<messagesType>
//         newMessageBody: string;
//     }
//     dispatch: any;
// };

const Dialogs = (props: any) => {


    let dialogsElements = props.dialogs.map((props: any) =>
        <DialogItem name={props.name} id={props.id}/>);

    let messagesElements =props.messages.map((props: any) =>
        <Message message={props.message}/>)

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to = {"/login"} /> ;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <img src='https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png'/>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
