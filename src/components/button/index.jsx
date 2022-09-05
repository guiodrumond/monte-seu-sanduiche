import { Component } from 'react'

class Button extends Component {

    render() {
        return(
            <button
                onClick={this.props.handleClick}
                className={ this.props.className }
            >{ this.props.text }</button>
        )
    }
}

export default Button