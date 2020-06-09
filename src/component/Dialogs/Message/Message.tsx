import s from "../Dialogs.module.css";
import React from "react";

type messageType ={
    message: string;
}
export const Message = (props: messageType) => {
    return <div className={s.message}>{props.message}</div>
}