import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsType = {
    // name: string;
    // id: number;
    // message:string;
    state: any

}
const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map( (d: any) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map( (d: any)=><Message message={d.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <img src='https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png'/>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
