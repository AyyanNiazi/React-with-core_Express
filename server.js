const express = require('express');
const cors = require('cors');
const app = express();
const route = express.Router()

app.use(cors());

app.get('/api' , (req, res) => {
    // res.send().json({msg: 'hello'})
    // let id = Math.random()
    
    const data = [{id:Math.random(),user: 'arslan', age: 40}, {id:Math.random(),user: 'ayyan', age: 23}, {id:Math.random(),user: 'john doe', age: 49},]
      res.json(data);
})

const port = process.env.PORT || 5000;

app.listen( port , () => console.log(`your server is running on port no ${port}`) )