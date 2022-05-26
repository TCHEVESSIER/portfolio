import { Component } from "react";

// Import SASS

import './Sidebar.sass'

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="sidebar--fixed sidebar--left">
                    <div className="sidebar--container">
                        <div className="btn btn--translate">EN</div>
                        <div className="btn btn--cv"><a href={require('../../Assets/Medias/CV.pdf')} target="blank"> CVE </a></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidebar