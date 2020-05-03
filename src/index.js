const express = require('express');
const app = express();
const mongouri = "mongodb+srv://<uname></uname>:<pass>@tracker-<ID>>.mongodb.net/test?retryWrites=true&w=majority"
app.get('/', (req,res)=>{

    res.send('Hi There');
});
app.listen(3000,()=>{
    console.log('Listening on Port 3000');
})