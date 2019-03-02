import React from 'react';
const Header=(props)=>(
    <nav>
        <div className="nav-wrapper light-blue darken-3">
            <a className="brand-logo center" rel="noopener" href="/">{props.titulo}</a>
        </div>
    </nav>
)

export default Header;