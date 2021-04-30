const express = require('express')
const router = express.Router()
const Task = require('../models/task')
// const getTask = require('../middlewares/task')

// Getting all tasks
router.get('/', async (req, res) => { 
	try {
		const tasks = await Task.find()
		res.json(tasks)
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

// Getting all tasks associated with a parent
router.get('/byParent/:parentId', async (req, res) => { 
	try {
		const tasks = await Task.find({ _parentId: req.params.parentId })
		res.json(tasks)
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

// // Getting a project
// router.get('/:id', getProject, (req, res) => {
// 	res.json(res.project)
// })

// Adding a task
router.post('/', async (req, res) => {
	const task = new Task({
		task: req.body.task,
		endDate: req.body.endDate,
		_parentId: req.body.parentId
	})
	try {
		const newTask = await task.save()
		res.status(201).json(newTask)
	} catch(err) {
		res.status(400).json({ message: err.message })
	}
})

// // Updating a project
// router.patch('/:id', getProject, async (req, res) => {
// 	if (req.body.name != null) {
// 		res.project.name = req.body.name
// 	}
// 	if (req.body.active != null) {
// 		res.project.active = req.body.active
// 	}
// 	if (req.body.color != null) {
// 		res.project.color = req.body.color
// 	}
// 	try {
// 		const updatedProject = await res.project.save()
// 		res.json(updatedProject)
// 	} catch(err) {
// 		res.status(400).json({ message: err.message })
// 	}
// })

// // Deleting a project
// router.delete('/:id', getProject, async (req, res) => {
// 	try {
// 		await res.project.remove()
// 		res.json({ message: 'Deleted project.' })
// 	} catch (err) {
// 		res.status(500).json({ message: err.message })
// 	}
// })

module.exports = router