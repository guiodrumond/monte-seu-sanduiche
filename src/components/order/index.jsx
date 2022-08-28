import { Component } from 'react'
import './style.css'
import Button from '../button'

class Order extends Component {
    render() {

        const items = this.props.items
        const total = this.props.total

        return (
            <div className='order'>
                <h2 className='orderTitle'>Ingredientes Selecionados:</h2>
                <div className='items'>
                    {console.log(items)}
                    {items.map(function (item, index) {
                        return <p key={index} className='selected-items'>{item[0].toUpperCase() + item.substring(1)}: </p>
                    })}
                </div>
                <p className='total'>
                    Total: R${parseFloat(total.reduce((accumulator, curr) => accumulator + curr)).toFixed(2)}
                </p>
                <Button className='order-button' text='Prosseguir' />
            </div>
        )
    }
}

export default Order
