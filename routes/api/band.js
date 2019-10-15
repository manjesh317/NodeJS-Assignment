const band=require('../../db').band
const route=require('express').Router();

route.get('/',(req,res)=>{
    band.findAll()
    .then((band)=>{
        res.status(200).send(band)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrieve bands"
        })
    })

})

route.post('/',(req,res)=>{
    
    band.create({
        name:req.body.name,
        description:req.body.description
    }).then((band)=>{
        res.status(201).send(band)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error in adding band"
        })
    })

})
exports=module.exports=route