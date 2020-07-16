// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/index';
import { CardsState} from '../store/card/types';
import { getCardsThunk } from '../store/card/actions';

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
        }
    }
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;



const MainComponent = ( props: Props ) => {
    const cards = props.cards;
    const getCards = props.getCards;
    
    console.log('MainComponent props', props)
    const onButtonClick = () => {
        console.log('on button click')
        getCards()
    }
 
    return (
        <>
            <div style={{
                margin: '10px'
            }}>
                <button onClick={onButtonClick}>Get Cards</button>
                {cards.length > 0 ? (
                    <>
                        {cards.map(card => <CardComponent key={card.id} title={card.title} body={card.body} /> )}
                    </>
                ) : (
                    <>
                        No cards yet
                    </>
                )}
            </div>
        </>
    )
}

export default connector(MainComponent); 
