import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {

    constructor() {
        super()
        this.state = {
            passo: 'carne'

        }
        this.listItemsInOrder = this.listItemsInOrder.bind(this)
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

        const menuItems = {
            pão: {
                australiano: {
                    name: 'Australiano',
                    price: 3
                },
                brioche: {
                    name: 'Brioche',
                    price: 3.5
                },
                gergelim: {
                    name: 'Gergelim',
                    price: 5.8
                },
                sal: {
                    name: 'Sal',
                    price: 2.5
                },
            },
            carne: {
                boi: {
                    name: 'Boi',
                    price: 8
                },
                porco: {
                    name: 'Porco',
                    price: 6
                },
                frango: {
                    name: 'Frango',
                    price: 4
                },
                vegetariano: {
                    name: 'Vegetariano',
                    price: 6
                }
            },
            queijo: 'queijo',
            saladas: 'saladas',
            complementos: 'complementos'
        }

        const title = 'Monte Seu Sanduíche'
        const textSectionTitle = 'Escolha o pão'
        const options = ['Australiano', 'Brioche', 'Gergelim', 'Sal']
        const total = [4, 6, 4, 2, 1, 7, 10]

        console.log(menuItems.values)

        return (
            <div className='content'>
                <Header title={title} />
                <InterectionSection
                    text={textSectionTitle}
                    options={options} />
                <Order
                    items={this.listItemsInOrder(1)}
                    total={total} />
            </div>
        )
    }
}

export default Content
