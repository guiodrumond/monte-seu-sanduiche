import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {
    render () {
        return (
            <div className='content'>
                <Header />
                <InterectionSection />
                <Order />
            </div>
        )
    }
}

export default Content
