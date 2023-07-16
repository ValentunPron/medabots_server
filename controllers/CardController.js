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

export const getOne = async (req, res) => {
	try {
		const cardId = req.params.id;

		const card = await CardModel.findOneAndUpdate({ id: cardId });
		res.status(200).json(card);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалося получити статі'
		})
	}
}