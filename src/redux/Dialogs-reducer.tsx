const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Privet!!'},
        {id: 4, message: 'Good morning'},
        {id: 5, message: 'Yoooo'},
    ],
    dialogs: [
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Vitya'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Nik'},
        {id: 5, name: 'Alina'},
    ],
    newMessageBody: " "
}


const dialogsReducer = (state=initialState , action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:
            let stateCopy = {...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = ' ';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
    }
    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body: any) =>
    ({type: UPDATE_NEW_MESSAGE_BODY , body : body }) ;

export default dialogsReducer;