import Product from '../models/products.js';

export const createProduct = async (req, res) => {
	try {
		const body = req.body;
		const { data } = await Product.create(body);
		return res.status(200).json({
			message: 'Thêm sản phẩm thành công!',
		});
	} catch (error) {
		console.log(error);
	}
};
