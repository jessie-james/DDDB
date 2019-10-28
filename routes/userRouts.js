const express = require("express");
const userRoute = express.Router();

userRoute.route('/:_id')
    .get((req, res) => {
        const _id = req.params._id
        userRoute.findById(_id, (err, user) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                return res.status(400).send(user)
            }
        })
    })
    .put((req, res) => {
        const _id = req.params._id
        userRoute.findByIdAndUpdate(_id, req.body,{new:true}, (err, user)=>{
            if (err) {
                return res.status(500).send(err)
            } else {
                return res.status(200).send(user)
            }
        })   
    })
    .delete((req, res) => {
        const _id = req.params._id
        userRoute.findByIdAndDelete(_id, (err, user) => {
            if (err) {
               return res.status(500).send(err)
            } else {
                return res.status(400).send({
                    msg:`Sucessfully deleted and removed the user`
                })
           }
        })
    })

module.exports = userRoute