const mongoose = require('mongoose');


const ConnectDb = async ()=>{

    try {
        await mongoose.connect('mongodb+srv://Admin:test1234@cluster0.gbbgjdx.mongodb.net/Postdb?retryWrites=true&w=majority',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        
    } catch (error) {
        console.log("Error connectiing to MongoDB")
        console.error(error.message)
        
    }

}


module.exports = ConnectDb;