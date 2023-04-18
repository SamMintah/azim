// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((data) => {
//       console.log(`mongod connected with server: ${data.connection.host}`);
//       console.log("database connected successfully")
//     });
// };

// module.exports = connectDatabase;


const mongoose = require("mongoose")
require('dotenv').config();

mongoose.set('strictQuery', true);

 async function connectDatabase(){
    try {
        await mongoose.connect(process.env.DB_URL,{
            dbName:"azim",

        })
        console.log("database connected successfully")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDatabase;
