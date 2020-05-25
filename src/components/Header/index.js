import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Cart, Container, Logo } from './styles';
import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <Container>
            <Link to="/">
                <Logo>
                    <img src={logo} width="50px" height="50px" alt="Carrinho de compras"/>
                </Logo>
            </Link>

            <Link to="/meu-carrinho">
                <Cart>
                    <div>
                        <strong>Meu carrinho</strong>
                        <span>3 itens</span>
                    </div>
                    <MdShoppingBasket size={36} color="#fff" />
                </Cart>
            </Link>
        </Container>
    );
}

export default Header;
