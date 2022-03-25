import React from 'react';
import Product from './Product';

const ProductList = () => {
    return(
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Pid</th>
                    <th>Name</th>
                    <th>Mrp</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <Product pid="101" name="Laptop" mrp="25000" price="30000" />
                <Product pid="102" name="desktop" mrp="25000" price="30000" />
                <Product pid="103" name="table" mrp="25000" price="30000" />
            </tbody>
        </table>
    )
}
export default ProductList;