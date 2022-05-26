import { Component } from "react";

// Import SASS

import './Button.sass'

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className={'btn'}>
                <span className="icon--btn"><img src={this.props.buttonIconUrl} alt="" /></span>
                <span className="text--btn">{this.props.buttonTextContent}</span>
            </button>
        )
    }
}

export default Button