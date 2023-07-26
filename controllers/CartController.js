import CardModel from '../models/Card.js';
import UserModel from '../models/User.js';

export const buyCard = async (req, res) => {
	try {
		const cardId = req.params.id;

		const card = await CardModel.findById(cardId);
		const user = await UserModel.findById(req.userId);
		
		user.buyCard.push(card);
	  
		await user.save();
	  
		res.json({
		  card
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалося купити товар'
		})
	}
}

export const getBuyCard = async (req, res) => {
	try {
		const userId = req.userId;

	const userCart = await UserModel.findById(userId)
		res.json({userCart: userCart});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалося получити статі'
		})
	}
}

export const remove = async (req, res) => {
	try {

		const cardId = req.params.id;
		const usersId = req.userId;

		const cards = await CardModel.findById({ _id: cardId });

		await UserModel.updateOne({ _id: usersId }, {
			$pull: {
				buyCard: {_id: cards._id }
			}
		});
		
		res.json({
			success: true
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалося видалити товар'
		})
	}
}

