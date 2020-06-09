import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props: any) => {
//     let state = props.store.getState();
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     let onNewMessageChange = (body: any) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     }
//
//     return  <Dialogs updateNewMessageBody={onNewMessageChange}
//                      sendMessage={onSendMessageClick}
//                      messages={state.dialogsReducer.messages}
//                      dialogs={state.dialogsReducer.dialogs}
//                      newMessageBody={state.dialogsReducer.newMessageBody}
//     />
// }
let mapStateProps = (state: any) => {
    return{
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        newMessageBody: state.dialogsReducer.newMessageBody
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
