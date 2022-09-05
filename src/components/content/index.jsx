import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {

    constructor() {
        super()

        const menuItems = [
            ['australiano', 'pão', 'Australiano', 3],
            ['brioche', 'pão', 'Brioche', 3.5],
            ['gergelim', 'pão', 'Gergelim', 5.8],
            ['sal', 'pão', 'Sal', 2.5],
            ['boi', 'carne', 'Boi', 8],
            ['porco', 'carne', 'Porco', 6],
            ['frango', 'carne', 'Frango', 4],
            ['vegetariano', 'carne', 'Vegetariano', 6],
            ['molhogorgonzola', 'queijo', 'Molho Gorgonzola', 8],
            ['prato', 'queijo', 'Prato', 6],
            ['cheddar', 'queijo', 'Cheddar', 6],
            ['semqueijo', 'queijo', 'Sem queijo', 0],
            ['alface', 'saladas', 'Alface', 1],
            ['tomate', 'saladas', 'Tomate', 2],
            ['cebola', 'saladas', 'Cebola', 2],
            ['picles', 'saladas', 'Picles', 4],
            ['bacon', 'complementos', 'Bacon', 4],
            ['cebolacaramelizada', 'complementos', 'Cebola Caramelizada', 2],
            ['molhoespecial', 'complementos', 'Molho Especial', 3],
            ['pimentajalapeno', 'complementos', 'Pimenta Jalapeño', 3]
        ]


        const steps = [...new Set(menuItems.map((item) => item[1]))]

        this.state = {
            title: 'Monte Seu Sanduíche',
            textSectionTitle: 'Escolha o pão',
            menuItems: menuItems,
            steps: steps,
            currentStep: steps[0],
            stepNumber: 0,
            options: [],
            total: [34, 56]
        }
        this.listOptions = this.listOptions.bind(this)
        this.currentStep = this.currentStep.bind(this)
        this.advanceStep = this.advanceStep.bind(this)
    }

    selectItem = ($event) => {
        return console.log($event.target)
    }

    listOptions() {
        const optionsList = []
        this.state.menuItems.map((arr) => {
            if (arr[1] === this.state.currentStep) {
                optionsList.push(arr[2])
            }
        })
        return optionsList
    }

    currentStep() {
        this.setState({
            currentStep: this.state.steps[this.state.stepNumber]
        })
    }


    advanceStep() {
        console.log(this.state)
        this.setState({
            stepNumber: this.state.stepNumber + 1,
        })
        this.currentStep()
        this.listOptions()
        console.log(this.state)
    }


    render() {

        // console.log(this.advanceStep())
        console.log(this.listOptions())

        return (
            <div className='content' >
                <Header title={this.state.title} />
                <InterectionSection
                    itemSelection={this.selectItem}
                    text={this.state.textSectionTitle}
                    options={this.listOptions()} />
                <Order
                    advanceStep={this.advanceStep}
                    itemSelection={this.selectItem}
                    items={this.listItemsInOrder}
                    total={this.state.total} />
            </div>
        )
    }
}

export default Content
