import { Component } from 'react'
import './style.css'

class SectionTitle extends Component {
    render() {
        return(
            <p className='section-title'>{ this.props.text }</p>
        )
    }
}

export default SectionTitle
