import { get } from '../../../api/getData';
import React, { useEffect, useState } from 'react';
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
				<div className="product">
					<div className="product-img">IMG</div>
					<div className="product-body">
						<div className="product-header">
							<h3 className="product-title">{item.name}</h3>
							<div className="product-price">{item.price}</div>
						</div>
						<div className="product-description">{item.description}</div>
						<div className="add-quantity-product">
							<label htmlFor="addProductQuantity">Quantity:</label>
							<select id="addProductQuantity">
								<option value="1" select="true">
									1
								</option>
								<option value="2">2</option>
								<option value="3">3+</option>
							</select>
						</div>
						<button className="add-product-btn">Add to cart</button>
					</div>
				</div>
			))}
		</>
	);
}
