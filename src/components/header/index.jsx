import { Component } from 'react'
import './style.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className='title'>{this.props.title}</h1>
            </div>            
        )
    }
}

export default Header
