const User=require('../../db').User
const route=require('express').Router()

route.get('/',(req,res)=>{
    User.findAll()
    .then((user)=>{
        res.status(200).send(user)
        
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrieve users"
        })
    })
})


route.post('/',(req,res)=>{
    User.create({
        name:req.body.name,
        company:req.body.company,
        dateOfBirth:req.body.dateOfBirth,
        email:req.body.email,
        password:req.body.password

    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        error:"Could not add new user"
    })
})
exports = module.exports=route