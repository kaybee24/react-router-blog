import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Navbar search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout