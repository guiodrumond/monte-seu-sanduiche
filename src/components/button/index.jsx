import { Component } from 'react'

class Button extends Component {

    // handleClick = () => {
    //     console.log(this)
    //     return this.props.handleClick()     
    // }

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