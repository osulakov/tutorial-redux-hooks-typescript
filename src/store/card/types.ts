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

export interface ICardComponent {
    card: Card,
    deleteCard: Function
}

// -- Actions Types -- //

export const GET_CARDS = "GET_CARDS";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";

// -- Actions Interfaces -- //

export interface GetCardsAction {
    type: typeof GET_CARDS
    payload: Card[]
}

export interface AddCardAction {
    type: typeof ADD_CARD
    payload: Card
}

export interface DeleteCardAction {
    type: typeof DELETE_CARD
    payload: Card[]
}

export type CardsActionTypes = GetCardsAction | AddCardAction | DeleteCardAction;