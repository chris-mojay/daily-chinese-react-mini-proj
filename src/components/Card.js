import React from 'react'
import ReactCardFlip from 'react-card-flip'

export default function Card ({chinese, pinyin, definition}) {
    const [isFlipped, setFlipped] = React.useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setFlipped(prevState => isFlipped === true ? false : true)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className='card' onClick={handleClick}>
                <p className='chinese-text'>
                    {chinese}
                </p>
            </div>

            <div className='card' onClick={handleClick}>
                <p className='pinyin-text'>
                    {pinyin}
                </p>
                <p className='definition-text'>
                    {definition}
                </p>
            </div>
        </ReactCardFlip>
    )
}