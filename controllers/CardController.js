import CardModel from '../models/Card.js'

export const getAll = async (req, res) => {
	try {
		const card = await CardModel.find();

		res.json(card)
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалося получити статі'
		})
	}
}
