import { Component } from 'react'

class Button extends Component {

    render() {
        return(
            <button
                onClick={this.props.handleClick}
                className={ this.props.className }
                id={this.props.id}
                step={this.props.step}
                name={this.props.name}
                price={this.props.price}
            >{ this.props.name }</button>
        )
    }
}

export default Button