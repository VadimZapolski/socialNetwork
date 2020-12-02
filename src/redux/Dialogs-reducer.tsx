const SEND_MESSAGE = 'SEND-MESSAGE';

type messagesType = {
    id: number
    message: string

}
type dialogsType = {
    id: number
    name: string
}

type initialStateType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}

let initialState:initialStateType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Privet!!'},
        {id: 4, message: 'Good morning'},
        {id: 5, message: 'Yoooo'},
    ] ,
    dialogs: [
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Vitya'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Nik'},
        {id: 5, name: 'Alina'},
    ]
}



const dialogsReducer = (state = initialState, action: sendMessageCreatorType): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody:string
}
export const sendMessageCreator = (newMessageBody: string):sendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;