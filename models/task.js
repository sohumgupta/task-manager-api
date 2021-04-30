const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true
	}, 
	endDate: {
		type: Date,
		required: true
	},
	_parentId: {
		type: mongoose.Types.ObjectId,
		required: true
	}
})

module.exports = mongoose.model('Task', taskSchema)