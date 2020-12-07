import React from "react";
import {sendMessageCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {AppStateType} from '../../redux/Redux-store';


let mapStateProps = (state: AppStateType) => {
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


export default compose <React.ComponentType>(
    connect( mapStateProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) ;
