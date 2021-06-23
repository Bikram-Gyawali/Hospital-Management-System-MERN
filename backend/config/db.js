const mongoose= require('mongoose');
const colors= require('colors');


const connectDb= ()=>{
    mongoose.connect(process.env.DATABASE_URI, {
        useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=> console.log(`DATABASE CONNECTED`.bold.green)).catch((e)=>{
        console.error(`Error: ${e.message}`.red.bold)
    })
}

module.exports= connectDb