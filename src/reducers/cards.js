import { aClick, aMath, aNewGame, aCardList } from '../actions/actionTypes.js';

const defaultState = {
    id: '',
    node_id: '',
    finish: false,
    list: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case aClick:
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.node_id]: {
                        ...state.list[action.payload.node_id],
                        open: true,
                    }
                }
            }
        case aMath:
            if (state.id === '') {
                return {
                    ...state,
                    id: action.payload.id,
                    node_id: action.payload.node_id,
                }
            } else if (state.id !== action.payload.id) {
                return {
                    ...state,
                    id: '',
                    node_id: '',
                    list: {
                        ...state.list,
                        [state.node_id]: {
                            ...state.list[state.node_id],
                            open: false,
                        },
                        [action.payload.node_id]: {
                            ...state.list[action.payload.node_id],
                            open: false,
                        }
                    }
                }
            } else if (state.id === action.payload.id) {
                return {
                    ...state,
                    id: '',
                    node_id: '',
                    finish: Object.values(state.list).every(item => item.open === true),
                    list: {
                        ...state.list,
                        [action.payload.node_id]: {
                            ...state.list[action.payload.node_id],
                            open: true,
                        }
                    }
                }
            } else {
                return {
                    ...state,
                }
            }
        case aNewGame:
            return {
                ...defaultState,
            }
        case aCardList:
            return {
                ...state,
                list: action.payload.list,
            }
        default:
            return state;
    }
}
