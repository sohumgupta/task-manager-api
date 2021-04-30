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
})

module.exports = mongoose.model('Project', projectSchema)