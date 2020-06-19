const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SENDS_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
    ],
    newMassageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMassageBody: action.body,
            };
        }
        case SENDS_MESSAGE: {
            let body = state.newMassageBody;
            return {
                ...state,
                newMassageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SENDS_MESSAGE,})
export const updateNewMessageBodyCreator = (body) => {
    return {        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogsReducer;