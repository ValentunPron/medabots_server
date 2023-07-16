import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	bodyPart: {
		type: String,
		required: true,
	},
	rarety: {
		status: { type: Number, required: true },
		name: { type: String, required: true },
	},
	family: {
		type: String,
		required: true
	},
	status: {
		life: { type: Number, required: true },
		attack: { type: Number, required: true },
		defense: { type: Number, required: true },
		speed: { type: Number, required: true },
	},
	price: {
		type: Number,
		required: true,
	},
	totalPrice: {
		type: Number,
		required: true
	}
}, 
{
	timestamps: true 
}
);

export default mongoose.model('Card', CardSchema);