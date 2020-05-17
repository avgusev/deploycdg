
import { aClick, aMath, aNewGame, aCardList } from './actionTypes.js';

export function newGame() {
    return dispatch => {
        dispatch({
            type: aNewGame,
        });
    }
}
export function setList(list) {
    return dispatch => {
        dispatch({
            type: aCardList,
            payload: {
                list: list,
            }
        });
    }
}

export function toggleCard(id, index) {
    return dispatch => {
        dispatch({
            type: aClick,
            payload: {
                id: id,
                node_id: index,
            },
        });
        setTimeout(() => {
            dispatch({
                type: aMath,
                payload: {
                    id: id,
                    node_id: index,
                },
            });
        }, 1000);
    }
}
export function addMatch(id) {
    return dispatch => {
        dispatch({
            type: aMath,
            payload: {
                id: id,
            },
        });
    }
}
