
// require('dotenv').config();
// const app=require('./src/app')


// app.listen(3000,()=>{
//     console.log("server is running");
// })
require('dotenv').config();
const app = require('./src/app');

app.listen(3000, async (err) => {
    if (err) {
        console.error("Server failed to start:", err);
        process.exit(1); // Exit the process on startup failure
        return;
    }
    console.log(`Server is running on port 3000 in ${process.env.NODE_ENV || 'development'} mode`);
});