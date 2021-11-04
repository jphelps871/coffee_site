import { get } from '../../../api/getData';
import React, { useEffect, useState } from 'react';
import ProductHeader from '../../../common/Product/ProductHeader';
import ProductQuantity from '../../../common/Product/ProductQuantity';
import './Products.scss';

export default function Products() {
	useEffect(() => {
		get
			.products()
			.then(function (response) {
				if (!response.ok) throw response;
				return response.json();
			})
			.then(function (products) {
				setProducts(products);
			})
			.catch(function (err) {
				console.error(err);
			})
			.finally(function () {
				setLoading(false);
			});
	}, []);

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	if (loading) return <p>Loading</p>;

	return (
		<>
			{products.map(item => (
				<div key={item.product_id} className="product">
					<div className="product-img">coffee img</div>
					<div className="product-body">
						<ProductHeader name={item.name} price={item.price} />
						<div className="product-description">{item.description}</div>
						<ProductQuantity />
						<button className="add-product-btn">Add to cart</button>
					</div>
				</div>
			))}
		</>
	);
}
