import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {

    constructor() {
        super()
        this.state = {
            step: 1,
            pão: {
                tipo: 'Brioche',
                valor: 5.8
            },
            carne: {
                tipo: 'Boi',
                valor: 6.7
            },
            queijo: {
                tipo: 'Prato',
                valor: 3.4
            },
            salada: {
                tipos: ['alface', 'tomate'],
                valores: [5, 6.8]
            },
            complementos: {
                tipos: ['bacon', 'picles'],
                valores: [7, 5.5]
            }
        }
        this.advanceSteps = this.advanceSteps.bind(this)
        this.listItemsInOrder = this.listItemsInOrder.bind(this)
    }

    advanceSteps() {
        console.log('Rodando')
        this.setState({
            step: this.state.step + 1
        })
    }

    listItemsInOrder(step) {
        const items = ['pão', 'carne', 'queijo', 'salada', 'complementos']
        const itemsList = []
        for (var i = 0; i < step; i++) {
            itemsList.push(items[i])
        }
        return itemsList
    }


    render() {

        const title = 'Monte Seu Sanduíche'
        const textSectionTitle = 'Escolha o pão'
        const options = ['Australiano', 'Brioche', 'Gergelim', 'Sal']
        const selectedItems = [
            ['Pão', 'Brioche'],
            ['Carne', 'Boi'],
            ['Queijo', 'Prato'],
            ['Salada', ['Alface', 'Tomate']],
            ['Complementos', ['Bacon', 'Cebola caramelizada', 'Picles']]
        ]
        const total = [4, 6, 4, 2, 1, 7, 10]

        console.log(this.state)

        return (
            <div className='content'>
                <Header title={title} />
                <InterectionSection
                    text={textSectionTitle}
                    options={options} />
                <Order
                    selectedItems={selectedItems}
                    items={this.listItemsInOrder(this.state.step)}
                    total={total} />
            </div>
        )
    }
}

export default Content
