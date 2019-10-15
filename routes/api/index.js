const route=require('express').Router()

route.use('/users',require('./user'))
route.use('/band',require('./band'))
exports=module.exports={
    route
}