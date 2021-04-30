const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const getProject = require('../middlewares/projects')

// Getting all projects
router.get('/', async (req, res) => { 
	try {
		const projects = await Project.find()
		res.json(projects)
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

// Getting a project
router.get('/:id', getProject, (req, res) => {
	res.json(res.project)
})

// Adding a project
router.post('/', async (req, res) => {
	const project = new Project({
		name: req.body.name,
	})
	try {
		const newProject = await project.save()
		res.status(201).json(newProject)
	} catch(err) {
		res.status(400).json({ message: err.message })
	}
})

// Updating a project
router.patch('/:id', getProject, async (req, res) => {
	if (req.body.name != null) {
		res.project.name = req.body.name
	}
	if (req.body.active != null) {
		res.project.active = req.body.active
	}
	if (req.body.color != null) {
		res.project.color = req.body.color
	}
	try {
		const updatedProject = await res.project.save()
		res.json(updatedProject)
	} catch(err) {
		res.status(400).json({ message: err.message })
	}
})

// Deleting a project
router.delete('/:id', getProject, async (req, res) => {
	try {
		await res.project.remove()
		res.json({ message: 'Deleted project.' })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router