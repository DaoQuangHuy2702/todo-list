import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1 className="header__title">Simple todo app</h1>
            </div>
        )
    }
}

export default Header;