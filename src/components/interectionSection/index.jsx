import { Component } from 'react'
import './style.css'
import Image from '../image/'
import SectionTitle from '../sectionTitle'
import Options from '../options'

class InterectionSection extends Component {
    render() {
        return (
            <div className='interection-section'>
                <Image />
                <SectionTitle />
                <Options />
            </div>
        )
    }
}

export default InterectionSection