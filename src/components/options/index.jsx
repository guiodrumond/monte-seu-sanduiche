import { Component } from 'react'
import './style.css'
import Button from '../button'

class Options extends Component { 

    render() {

        const options = this.props.options
        const handleClick = this.props.handleClick

        return (
            <div className='options'>
                {options.map(function(option, index) {
                    return <Button
                                handleClick={handleClick}
                                key={index}
                                text={option}
                                className='options-button'/>
                })}
            </div>
        )
    }
}

export default Options
