import React from 'react'
import Button from './Button'
import Card from './Card'
import words from '../words'
import { CSSTransition } from 'react-transition-group'

const getWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

export default function Review () {
    const [show, setShow] = React.useState(true)
    const [word, setWord] = React.useState(getWord())
    const buttonSelectedClass = React.useRef(null)

    const handleClick = (e) => {
        setShow(false)
        buttonSelectedClass.current = e.target.value === 'Incorrect' ? 'card-left-' : 'card-right-'
    }

    const newWord = () => {
        setWord(() => getWord())
    }

    React.useEffect(() => {
        setShow(true)
    }, [word])

    return (
        <div className='review-wrapper'>
            <CSSTransition
                in={show}
                timeout={500}
                classNames={buttonSelectedClass.current}
                unmountOnExit={true}
                onExited={() => newWord()}
            >
                <Card
                    chinese={word.chinese}
                    defintiion={word.definition}
                    pinyin={word.pinyin}
                    key={word.chinese}
                />
            </CSSTransition>
            <div className='button-wrapper'>
                <Button className='button-incorrect' label='Incorrect' handleClick={handleClick} />
                <Button className='button-correct' label='Correct' handleClick={handleClick} />
            </div>
        </div>
    )
}