import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {

    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item header'>Streamer</Link>
            <div className='right menu'>
                <Link to='/' className='item header'>Streams</Link>
                <div className='item header'>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default Header;
