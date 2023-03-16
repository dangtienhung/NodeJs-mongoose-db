import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
	name: {
		type: String,
		maxLength: 200,
	},
	price: {
		type: Number,
	},
});

export default mongoose.model('product', productSchema);
