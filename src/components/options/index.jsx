import { Component } from 'react'
import './style.css'
import Button from '../button'

class Options extends Component {

    

    constructor() {
        super()

        this.state = {
            options: this.props.options
        }

        this.defineOptions = this.defineOptions.bind(this)
    }

    defineOptions() {
        const options = this.state.options
        options.map((arr, index) => {
            this.setState({
                [index]: arr[2]
            })
        })
        console.log(this.state)
    }

    render() {

        const currentStep = this.props.currentStep
        const options = this.props.options

        function listOptions(list) {
            const optionsList = []
            list.map((arr) => {
                const [item, step, itemName, price] = arr
                if (step === currentStep) {
                    const list = []
                    list.push(item)
                    list.push(step)
                    list.push(itemName)
                    list.push(price)
                    list.push('unselected')
                    optionsList.push(list)
                }
            })
            return optionsList
        }

        const handleClick = this.defineOptions

        return (
            <div className='options'>
                {listOptions(this.props.options).map(function (option, index) {
                    return <Button
                        handleClick={handleClick}
                        key={index}
                        id={option[0]}
                        step={option[1]}
                        name={option[2]}
                        text={option[2]}
                        price={option[3]}
                        className='options-button' />
                })}
            </div>
        )
    }
}

export default Options
