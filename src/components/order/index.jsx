import { Component } from 'react'
import './style.css'
import Button from '../button'

class Order extends Component {
    render() {
        return (
            <div className='order'>
                <h2 className='orderTitle'>Ingredientes Selecionados:</h2>
                <div>
                    <p className='selected-itens'>Pão: Brioche</p>
                    <p className='total'>Total: R$ 5,00</p>
                </div>
                <Button className='order-button' text='Prosseguir' />
            </div>
        )
    }
}

export default Order