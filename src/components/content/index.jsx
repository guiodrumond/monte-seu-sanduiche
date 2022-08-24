import { Component } from 'react'
import './style.css'
import Header from '../header'
import Image from '../image'
import Order from '../order'

class Content extends Component {
    render () {
        return (
            <div className='content'>
                <Header />
                <Image />
                <Order />
            </div>
        )
    }
}

export default Content
