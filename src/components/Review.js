import React from 'react'
import Button from './Button'
import Card from './Card'
import words from '../words'
import { CSSTransition } from 'react-transition-group'

const getWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

const reducer = (state, action) => {
    if (action.type === 'show-word') {
        return {
            ...state,
            word: getWord(),
            show: true
        }
    } else if (action.type === 'dismiss-word') {
        return {
            ...state,
            show: false
        }
    } else {
        throw new Error ('This is not a valid action')
    }
}

export default function Review () {
    const [state, dispatch] = React.useReducer(
        reducer, 
        {
            show: true, 
            word: getWord()
        }
    )
    const buttonSelectedClass = React.useRef(null)

    const handleClick = (e) => {
        buttonSelectedClass.current = e.target.value === 'Incorrect' ? 'card-left-' : 'card-right-'
        dispatch({type: 'dismiss-word'})
    }

    return (
        <div className='review-wrapper'>
            <CSSTransition
                in={state.show}
                timeout={500}
                classNames={buttonSelectedClass.current}
                unmountOnExit={true}
                onExited={() => dispatch({type: 'show-word'})}
            >
                <Card
                    chinese={state.word.chinese}
                    defintiion={state.word.definition}
                    pinyin={state.word.pinyin}
                    key={state.word.chinese}
                />
            </CSSTransition>
            <div className='button-wrapper'>
                <Button className='button-incorrect' label='Incorrect' handleClick={handleClick} />
                <Button className='button-correct' label='Correct' handleClick={handleClick} />
            </div>
        </div>
    )
}