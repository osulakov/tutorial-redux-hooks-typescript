// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

export interface Card {
    id: number,
    title: string,
    body: string
}

export interface CardsState {
    cards: Card[]
}

// -- Actions Interfaces -- //

export const GET_CARDS = "GET_CARDS";
export const ADD_CARD = "ADD_CARD";

export interface GetCardsAction {
    type: typeof GET_CARDS
    payload: Card[]
}

export interface AddCardAction {
    type: typeof ADD_CARD
    payload: Card
}

export type CardsActionTypes = GetCardsAction | AddCardAction;