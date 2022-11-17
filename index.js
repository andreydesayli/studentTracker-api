var express = require('express');
var app = express();

app.use(express.json());

app.post('/push-notification/entered', (req, res)=>{
    module.exports.token = `${req.body.token}`;
    
    async function pushNotif(){
        // require('./src/Notification')
        return notification = require('./src/Notification')
        // return notification;
    }
    pushNotif()
    .then((result) => {
        if(result){
            res.send({
                message: "Notification was pushed!!!!!"
            })
        }
    }).catch((err) => {
        res.status(404).send({
            message: err.message
        })
    });
});

app.post('/push-notification/exited', (req, res)=>{
    module.exports.token = `${req.body.token}`;
    
    async function pushNotif(){
        // require('./src/Notification')
        return notification = require('./src/NotificationExit')
        // return notification;
    }
    pushNotif()
    .then((result) => {
        if(result){
            res.send({
                message: "Notification was pushed!!!!!"
            })
        }
    }).catch((err) => {
        res.status(404).send({
            message: err.message
        })
    });
});

app.get('/', (req, res)=>{
    console.log('hi welcome to Unklab Student Tracker API!');
    res.send({
        message: "hi welcome to Unklab Student Tracker API!"
    })
})

var port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));