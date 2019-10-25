const initialState = {
    todos: []
}

export default function list(state = initialState, action) {
    if (action.type === 'ADD_TASK') {
        return {
            ...state,
            todos: [...state.todos, action.payload]
        };
    } else if (action.type === 'DELETE_TASK') {
        console.log('action.payload.id', action.payload.id)
        return {
            ...state,
            todos: state.todos.filter(item => item.id !== action.payload.id)
        }
    } else if (action.type === 'SAVE_TASK') {
        return {
            ...state,
            todos: state.todos.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    return action.payload;
                }
            }),
        }
    } else if (action.type === 'CHECKED_TASK') {
        return {
            ...state,
            todos: state.todos.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    return action.payload;
                }
            }),

        }
    }

    return state;
}