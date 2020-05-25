import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://images-submarino.b2w.io/produtos/01/00/img/59394/0/59394048_1GG.jpg"
                                alt="Notebook"
                            />
                        </td>
                        <td>
                            <strong>Notebook</strong>
                            <span>R$1.299,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#4169E1" />
                                </button>
                                <input type="number" readonly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#4169E1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$1.299,90</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#4169E1"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$1.299,90</strong>
                </Total>
            </footer>
        </Container>
    );
}

export default Cart;
