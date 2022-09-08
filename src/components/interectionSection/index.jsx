import { Component } from 'react'
import './style.css'
import Image from '../image/'
import SectionTitle from '../sectionTitle'
import Options from '../options'

class InterectionSection extends Component {
    render() {

        const menuItems = this.props.menuItems

        return (
            <div className='interection-section'>
                <Image />
                <SectionTitle text={this.props.text} />
                <Options
                    handleClick={this.props.itemSelection}
                    options={this.props.options}
                    currentStep={this.props.currentStep} />
            </div>
        )
    }
}

export default InterectionSection