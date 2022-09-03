import { Component } from 'react'

class Button extends Component {

    clicou = () => {
        return console.log(this.props.text)        
    }

    render() {
        return(
            <button
                onClick={this.clicou.bind(this)}
                className={ this.props.className }
            >{ this.props.text }</button>
        )
    }
}

export default Button