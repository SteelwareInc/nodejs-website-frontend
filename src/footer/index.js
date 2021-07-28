import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul className="icons">
                    <li>
                        <a href="https://twitter.com/TNYCL_" rel="noreferrer" target="_blank" className="icon">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/TNYCL" rel="noreferrer" target="_blank" className="icon">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tuna-y%C3%BCcel-413576161/" rel="noreferrer" target="_blank" className="icon">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:contact@tnycl.net" rel="noreferrer" target="_blank" className="icon">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </li>
                </ul>
                <ul className="copyright">
                    <li>Copyright © {new Date().getFullYear()} Steelware Inc. - All Rights Reserved</li>
                </ul>
            </div>
        );
    }
}

export default Footer;