import Express from 'express';

const app = Express()

app.get("/", (req, res) => {
    console.log("Hello there 5")
    res.send("Hello World What 5")
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})