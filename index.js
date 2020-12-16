const express = require('express')

const app = express()

const courses = [
    {id:1, name : 'course 1'},
    {id:1, name : 'course 2'},
]

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) 
        return res.status(404).send('找不到资源')
    res.send(course)
})
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}...`))

//mongodb+srv://JankLai:ab123456@cluster0.xiycq.mongodb.net