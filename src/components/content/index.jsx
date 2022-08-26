import { Component } from 'react'
import './style.css'
import Header from '../header'
import InterectionSection from '../interectionSection'
import Order from '../order'

class Content extends Component {
    render () {

        const title = 'Monte Seu Sanduíche'
        const textSectionTitle = 'Escolha o pão'
        const options = ['Australiano','Brioche','Gergelim','Sal']
        const selectedItems = [
            'Pão: Brioche',
            'Carne: Boi',
            'Queijo: Prato',
            'Salada: Alface, Tomate',
            'Complementos: Bacon, Cebola caramelizada, Picles'
        ]
        const total = [4,6,4,2,1,7,10]

        return (
            <div className='content'>
                <Header title={title} />
                <InterectionSection text={textSectionTitle} options={options} />
                <Order selectedItems={selectedItems} total={total} />
            </div>
        )
    }
}

export default Content
