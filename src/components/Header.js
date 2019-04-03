import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header jumbotron jumbotron-fluid bg-dark text-light mb-0 text-center pt-4 pb-4">
                <div className="container">
                    <h1 className="display-3"><i className="fa fa-cog" aria-hidden="true"></i> Weather</h1>
                </div>
            </header>
        );
    }
}

export default Header;