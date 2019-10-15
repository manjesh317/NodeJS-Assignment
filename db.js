const Sequelize=require('sequelize')
const db = new Sequelize('nodejsdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    
  });
  const User=db.define('User',{
    id:{
        type:Sequelize.UUID,
        primaryKey:true,
        defaultValue:Sequelize.UUIDV4
    },
    name:Sequelize.STRING,
    company:Sequelize.STRING,
    dateOfBirth:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING
})
  
const band=db.define('band',{
    name:Sequelize.STRING,
    description:Sequelize.STRING
})
User.hasMany(band);
db.sync()
  .then(()=>console.log("Dtabase has been synced"))
  .catch((err)=> console.error("Error creating database"))

exports=module.exports={
    User,band
}
  // Or you can simply use a connection uri
  var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');