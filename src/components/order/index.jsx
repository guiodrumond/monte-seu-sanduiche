import { Component } from 'react'
import './style.css'
import Button from '../button'

class Order extends Component {
    render() {
        return (
            <div className='order'>
                <h2 className='orderTitle'>Ingredientes Selecionados:</h2>
                {this.props.selectedItems.map(function (item) {
                    return <spam className='selected-itens'>{item}</spam>
                })}
                <spam className='total'>
                    Total: R${parseFloat(this.props.total.reduce((accumulator, curr) => accumulator + curr)).toFixed(2)}
                </spam>
                <Button className='order-button' text='Prosseguir' />
            </div>
        )
    }
}

export default Order
