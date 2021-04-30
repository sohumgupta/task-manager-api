const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
	active: {
		type: Boolean,
		required: false,
		default: true
	},
	color: {
		type: String,
		required: false,
		default: '#808080'
	},
	children: {
		type: mongoose.Schema.Types.Mixed,
		required: false,
		default: []
	}
})

module.exports = mongoose.model('Project', projectSchema)