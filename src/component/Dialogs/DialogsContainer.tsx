import React from "react";
import {sendMessageCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
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
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose(
    connect( mapStateProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) as React.FC;
