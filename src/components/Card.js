import React from 'react'
import words from '../words'
import ReactCardFlip from 'react-card-flip'

function getWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

export default class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            word: {},
            isFlipped: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.updateWord = this.updateWord.bind(this)
    }
    updateWord() {
        this.setState({
            word: getWord(words)
        })
    }
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    componentDidMount() {
        this.setState({
            word: getWord(words)
        })
    }
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className='card' onClick={this.handleClick}>
                    <p className='chinese-text'>
                        {this.state.word.chinese}
                    </p>
                </div>

                <div className='card' onClick={this.handleClick}>
                    <p className='pinyin-text'>
                        {this.state.word.pinyin}
                    </p>
                    <p className='definition-text'>
                        {this.state.word.definition}
                    </p>
                </div>
            </ReactCardFlip>
        )
    }
}