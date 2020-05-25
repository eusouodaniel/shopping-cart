import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';
import api from '../../services/api';

class Home extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get('products');
        this.setState({
            products: response.data
        });
    }

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                { products.map(product => (
                    <li key={product.id}>
                        <img
                            src={product.image}
                            alt={product.title}
                        />
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>
                        <button>
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" />
                            </div>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                )) }

            </ProductList>
        );
    }
}

export default Home;
