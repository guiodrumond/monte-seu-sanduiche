import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {

    constructor() {
        super()
        this.state = {
            step: ''
        }
        this.listItemsInOrder = this.listItemsInOrder.bind(this)
        this.selectItem = this.selectItem.bind(this)
    }

    selectItem = ($event) => {
        return console.log($event.target)
    }

    listItemsInOrder(step) {
        const items = ['pão', 'carne', 'queijo', 'salada', 'complementos']
        const itemsList = []
        for (var i = 0; i < step; i++) {
            itemsList.push(items[i])
        }
        return itemsList
    }

    currentStep(steps, stepNumber) {
        this.setState({
            step: steps[stepNumber]
        })
    }


    render() {

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


        const title = 'Monte Seu Sanduíche'
        const textSectionTitle = 'Escolha o pão'

        const steps = [...new Set(menuItems.map((item) => item[1]))]

        console.log(steps)

        console.log(this.state)

        const options = ['Australiano', 'Brioche', 'Gergelim', 'Sal']
        const total = [4, 6, 4, 2, 1, 7, 10]

        return (
            <div className='content' >
                <Header title={title} />
                <InterectionSection
                    itemSelection={this.selectItem}
                    text={textSectionTitle}
                    options={options} />
                <Order
                    itemSelection={this.selectItem}
                    items={this.listItemsInOrder(1)}
                    total={total} />
            </div>
        )
    }
}

export default Content
