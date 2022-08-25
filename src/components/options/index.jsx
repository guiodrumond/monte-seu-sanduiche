import { Component } from 'react'
import './style.css'
import Button from '../button'

class Options extends Component {
    render() {
        return (
            <div className='options'>
                <Button className='options-button' text='Australiano'/>
                <Button className='options-button' text='Brioche'/>
                <Button className='options-button' text='Gergelim'/>
                <Button className='options-button' text='Sal'/>
            </div>
        )
    }
}

export default Options
