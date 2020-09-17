import React from 'react'
import Button from './Button'
import Card from './Card'
import { CSSTransition } from 'react-transition-group'

let key, buttonSelectedClass

export default class Review extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showCard: true
        }
    
        this.cardComponent = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.getNewCard = this.getNewCard.bind(this)
    }
    handleClick(e) {
    
        // Starts the exit animation
        this.setState({
            showCard: false
        }) 

        buttonSelectedClass = e.target.value === 'Incorrect' ? 'card-left-' : 'card-right-'
    }
    getNewCard() {
        // Animates in new card
        this.setState({ 
            showCard: true 
        })
        
        // Changes key variable to remount the component and avoid flipanimation
        key = this.cardComponent.current.state.word.chinese
        this.cardComponent.current.updateWord()
    }
    render() {
        return(
        <div className='review-wrapper'>
            <CSSTransition
                in={this.state.showCard}
                timeout={500}
                classNames={buttonSelectedClass}
                unmountOnExit={true}
                onExited={this.getNewCard}
            >
                <Card 
                    ref={this.cardComponent} 
                    key={key} 
                />          
            </CSSTransition>
            <div className='button-wrapper'>
                <Button className='button-incorrect' label='Incorrect' onClick={this.handleClick} />
                <Button className='button-correct' label='Correct' onClick={this.handleClick} />
            </div>
        </div>
        )
    }

}