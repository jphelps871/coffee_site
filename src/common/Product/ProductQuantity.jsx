import './product.scss';

export default function ProductQuantuty() {
	return (
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
	);
}
