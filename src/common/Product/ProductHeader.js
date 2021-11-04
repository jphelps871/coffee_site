import './product.scss';

export default function ProductHeader({ name, price }) {
	return (
		<div className="product-header">
			<h3 className="product-title">{name}</h3>
			<div className="product-price">{price}</div>
		</div>
	);
}
