import  express  from 'express'
import { createClient } from 'redis'

const app = express()
const port = 3001
const client = createClient()

// init redis
client.connect().then(() => {
  console.log('Redis client connected')
}).catch((err)=>{
  console.error('Error connecting to MongoDB', err)
})

// set redis manual
client.set("name", "irwan")
client.set("age", 26)
client.set("hobies", JSON.stringify(["play games","sport"]))

/* routing */
// save data to redis
app.get('/set/:key/:value', (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
  
    client.set(key, value, (err, reply) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(reply);
        res.send(reply);
      }
    })
})

// get data from redist
app.get('/get/:key', (req, res) => {
  const key = req.params.key;

  client.get(key).then((data) => res.send(data))
})


// run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})