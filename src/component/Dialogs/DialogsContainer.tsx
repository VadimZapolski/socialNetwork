import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import authReducer from '../../redux/Auth-reducer';
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


let mapStateProps = (state: any) => {
    return{
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs,
        newMessageBody: state.dialogsReducer.newMessageBody,
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


export default compose(
    connect( mapStateProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) as React.FC;
