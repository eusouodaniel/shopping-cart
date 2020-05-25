import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

function Home() {
    return (
        <ProductList>
            <li>
                <img src="https://images-submarino.b2w.io/produtos/01/00/img/59394/0/59394048_1GG.jpg" alt="Notebook" />
                <strong>Notebook</strong>
                <span>R$1.299,90</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home;
