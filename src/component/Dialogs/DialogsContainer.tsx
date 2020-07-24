import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import authReducer from '../../redux/Auth-reducer';


let mapStateProps = (state: any) => {
    return{
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        newMessageBody: state.dialogsReducer.newMessageBody,
        isAuth: state.authReducer.isAuth
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect( mapStateProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
