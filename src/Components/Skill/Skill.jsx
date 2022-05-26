import { Component } from "react";

// Import SASS

import './Skill.sass'

class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="skills--item skill">
                    <span className="skill--icon">
                        {this.props.svgCode}
                    </span>
                    <h3 className="skill--title"> {this.props.title} </h3>
                </div>
            </>
        )
    }
}

export default Skill