import React, { Component } from 'react';
import logo from './image/logo.png';
import "./Header.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

class Header extends Component {
    state = {
        clicked: false,
        searchQuery: ''
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', this.state.searchQuery);
        // Here you can add logic to handle the search query, such as fetching data or navigating to a search results page.
    }

    render() {
        return (
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Product</a></li>
                        <li><a href="index.html">Cart</a></li>
                        <li><a href="index.html">Login</a></li>
                    </ul>
                </div>
                <div id="search">
                    <form onSubmit={this.handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={this.state.searchQuery}
                            onChange={this.handleSearchChange}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        );
    }
}

export default Header;
