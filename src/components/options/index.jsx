import { Component } from 'react'
import './style.css'
import Button from '../button'

class Options extends Component { 

    render() {

        const options = this.props.options

        return (
            <div className='options'>
                {options.map(function(option, index) {
                    return <Button key={index} text={option} className='options-button'/>
                })}
            </div>
        )
    }
}

export default Options
