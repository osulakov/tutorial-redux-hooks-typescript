// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/index';
import { CardsState, Card} from '../store/card/types';
import { 
    getCardsThunk, 
    addCard,
    deleteCard 
} from '../store/card/actions';

import CardComponent from './CardComponent';



const mapState = (state: RootState): CardsState => {
    return {
        cards: state.cardsReducer.cards
    }
}

const mapDispatch = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        getCards: async () => {
            await dispatch(getCardsThunk())
            console.log('Get cards is completed')
        },
        addCard: (card: Card) => dispatch(addCard(card)),
        deleteCard: (cards: Card[], id: Number) => dispatch(deleteCard(cards, id))
    }
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;



const MainComponent = ( props: Props ) => {
    const cards = props.cards;
    const getCards = props.getCards;
    const addCard = props.addCard;
    const deleteCard = props.deleteCard;
    
    console.log('MainComponent props', props)

    // call Get Cards action
    const onClickGetCards = () => {
        console.log('onClickGetCards')
        getCards()
    }

    // call add new card action
    const onClickAddCard = () => {
        const card = {
            id: Math.floor(Math.random() * 100000),
            title: 'Hello',
            body: 'Body'
        }
        console.log('onClickAddCard')
        addCard(card)
    }

    // call delete card action
    const handleDeleteCard = (id: Number) => {
        deleteCard(cards, id);
    } 
 
    return (
        <>
            <div style={{
                margin: '10px'
            }}>
                <button onClick={onClickGetCards}>Get Cards</button>
                {cards.length > 0 ? (
                    <>
                        {cards.map(card => <CardComponent key={card.id} card={card} deleteCard={handleDeleteCard} /> )}
                    </>
                ) : (
                    <>
                        No cards yet
                    </>
                )}
                <button onClick={onClickAddCard}>Add Card</button>
            </div>
        </>
    )
}

export default connector(MainComponent); 
