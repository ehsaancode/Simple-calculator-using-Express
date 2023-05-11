const { config } = require('dotenv')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
dotenv = config()

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    // console.log(req.body)
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2
    // console.log(result)

    res.send(`Result is ${result}`)

})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`listning to port ${PORT}`)
})