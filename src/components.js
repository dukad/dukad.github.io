import React from 'react'

class navBar extends React.Component {
    constructor(props) {
        super(props)
        this.pages = ["Introduction", "Work Things", "Projects", "For Fun"]
    }
    
    render() {
        return (
            <ul className = "navBar">
                {this.pages.map((element, index) => (
                <li key={index}>{element}</li>
                ))}
            </ul>
        )
    }
}

export default navBar;