import React from 'react'
import './scss/style.scss';
import './css/style.css';
import './css/style.css.map';

function Header() {
    return (
        <header>
            <nav>
                <h2>SH</h2>
                <ul>
                    <li>
                        <p>Boas-Vindas, FIAP | Seu e-mail é: FIAP@gmail.com</p>
                    </li>
                    <li>
                        <a class="" href="http://localhost:3000/main">Logout</a>
                    </li>
                </ul>

                <p>Global Solution 2023 - Engenharia de Software</p>
            </nav>
        </header>
    )
}

export default Header
