import { Component } from 'react'
import './style.css'
import Button from '../button'

class Order extends Component {

    

    render() {

        const total = this.props.total

        return (
            <div className='order'>
                <h2 className='orderTitle'>Ingredientes Selecionados:</h2>
                <div className='items'>
                    
                </div>
                <p className='total'>
                    Total: R${parseFloat(total.reduce((accumulator, curr) => accumulator + curr)).toFixed(2)}
                </p>
                <Button
                    handleClick={this.props.advanceStep}
                    className='order-button'
                    text='Prosseguir' />
            </div>
        )
    }
}

export default Order
