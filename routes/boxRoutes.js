const express = require('express')
const boxRouter = express.Router()
const Box = require('../models/box')

boxRouter.route('/')
    .get((req, res) => {
        Box.find((err, boxes) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(boxes)
        })
    })
    .post((req, res) => {
        const newBoxTheme = new Box(req.body)
        newBoxTheme.save(err => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newBoxTheme)
        })
    })
boxRouter.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        Box.findById(_id, (err, box) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(box)
        })
    })
    .put((req, res) => {
        const _id = req.params._id
        Box.findByIdAndUpdate(_id,
            req.body,
            {new: true },
            (err, box) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(box)
            })
    })
    .delete((req, res) => {
        const _id = req.params._id
        Box.findByIdAndDelete(_id, (err, box) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({
                msg: 'Successfully deleted Themed box'
            })
        })
    })

module.exports = boxRouter
    


