import React from 'react';
import Products from './products/Products';
import './Home.scss';

export default function Home() {
	return (
		<main className="wrapper">
			<div className="top-text-container">
				<h1>Freshly roasted to your doorstep</h1>
				<p>
					All our coffee are roasted and bagged within as little time as possible, resulting in a
					deeper, more buristo tasting coffee. We pride ourselved at giving back to the communities,
					and splitting profits equally.
				</p>
			</div>
			<div className="products-container">
				<Products />
			</div>
		</main>
	);
}
