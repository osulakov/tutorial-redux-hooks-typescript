// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import axios from 'axios';

import { Card, GET_CARDS, ADD_CARD, GetCardsAction, AddCardAction } from './types';


// -- Action creators -- //
export function getCards(cards: Card[]): GetCardsAction {
    return {
        type: GET_CARDS,
        payload: cards
    }
}

export function addCard(card: Card): AddCardAction {
    console.log('action add card')
    return {
        type: ADD_CARD,
        payload: {
            id: 1,
            title: 'Hello',
            body: 'Body'
        }
    }
}

// -- Thunk Actions -- //

export const getCardsThunk = ():ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        const apiResult = await getCardsAPI();
        dispatch(getCards(apiResult))
    }
}

// -- API calls -- //

const getCardsAPI = ():Promise<Card[]> => {
    return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}