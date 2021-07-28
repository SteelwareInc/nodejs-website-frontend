import React from 'react';
import avatar from '../avatar.gif';
import './index.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="https://www.tnycl.com" className="avatar"><img src={avatar} alt=""></img></a>
                <h1 className="text"><strong>Hey, I'm Tuna </strong>and I'm developing on Java, JavaScript, Unity, Python and PHP.</h1>
            </div>
        );
    }
}

export default Header;