import  express  from 'express'
import { createClient } from 'redis'
import 'dotenv/config'

const app = express()
const port = 3001
const client = createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
})

// init redis
client.connect().then(() => {
  console.log('Redis client connected')
}).catch((err)=>{
  console.error('Error connecting to redis', err)
})

// set redis manual
client.set("name", "irwan")
client.set("age", 26)
client.set("hobies", JSON.stringify(["play games","sport"]))

/* routing */
// all key
app.get('/keys',(req,res)=>{
  client.keys('*').then((list)=>{
    res.send(list)
  })
})

// save data to redis
app.get('/set/:key/:value', (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
  
    client.set(key, value).then(()=>{
      res.send(`${key} berhasil ditambahkan`)
    })
})

// get data from redist
app.get('/get/:key', (req, res) => {
  const key = req.params.key;

  client.get(key).then((data) => res.send(data))
})

// delete data from redist
app.get('/del/:key', (req, res) => {
  const key = req.params.key;

  client.del(key).then(() => res.send(`${key} berhasil dihapus`))
})

// run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})