const express = require('express');
const app = express()
const Joi = require('joi');

app.use(express.json())


let userApi = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        address: "no 7 Ahmed Tahlib street"
    },
    {
        id: 2,
        name: "Ben Ten",
        username: "BenTen",
        email: "benten@april.biz",
        phone: "18031 x56442",
        address: "no 9 Ahmed Tahlib street"
    },
    {
        id: 3,
        name: "Tu Face",
        username: "TUbaba",
        email: "tubaba@april.biz",
        phone: "1-770-736-8",
        address: "no 107 Ahmed Tahlib street"
    },
    {
        id: 4,
        name: "Koko Master",
        username: "kokolet",
        email: "kokolete@april.biz",
        phone: "1-7-8031 x56442",
        address: "no 20 Ahmed Tahlib street"
    },
    {
        id: 5,
        name: "Tupac Shakur",
        username: "outlaw",
        email: "outlaw@april.biz",
        phone: "1-88505841 x56442",
        address: "no 007 Ahmed Tahlib street"
    },
    {
        id: 6,
        name: " Joe Thomson",
        username: "Jthomson",
        email: "jthomson@april.biz",
        phone: "1-770-875 x56442",
        address: "no 71 Ahmed Tahlib street"
    },
    {
        id: 7,
        name: "Kelly Roland",
        username: "Kelly",
        email: "kelly@april.biz",
        phone: "1-77556-8031 x56442",
        address: "no 76 Ahmed Tahlib street"
    },
    {
        id: 8,
        name: "Kelly Handsom",
        username: "shakeuwku",
        email: "shakeuwku@april.biz",
        phone: "77556-8042",
        address: "no 56 Ahmed Tahlib street"
    },
    {
        id: 9,
        name: "Paul Play",
        username: "4ever",
        email: "paulplay@april.biz",
        phone: "1-7755656442",
        address: "no 60 Ahmed Tahlib street"
    },
    {
        id: 10,
        name: "Brandy ",
        username: "drumOfLife",
        email: "dboyismine@april.biz",
        phone: "1-77556-8031",
        address: "no 100 Ahmed Tahlib street"
    },
]

// get request for all users
app.get('/', (req, res) => {

    res.send(userApi)

});

//get a single user

app.get('/api/user/:id', (req, res) => {
    let anyUser = userApi.find((user) => {
        return user.id === parseInt(req.params.id)

    })
    if (!anyUser) {
        res.status(404).send('No such user found')
    } else {
        res.send(anyUser)
    }
});

//add a user 
app.post('/api/create', (req, res) => {

    // creating the user obj
    let newUser = {
        id: userApi.length + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    };
    userApi.push(newUser);
    res.send(newUser);
});

app.put('/api/update/:id', (req, res) => {
    let anyUser = userApi.find((user) => {
        return user.id === parseInt(req.params.id)
    })
    if (!anyUser) {
        res.status(400).send('user not found')
        return;
    }

    anyUser.name = req.body.name;
    anyUser.username = req.body.username;
    anyUser.email = req.body.email;
    anyUser.phone = req.body.phone;
    anyUser.address = req.body.address;
    // userApi.push(anyUser);
    res.send(anyUser)
});

// deleting a user 

app.delete('/api/remove/:id', (req, res) => {
    let anyUser = userApi.find((user) => {
        return user.id === parseInt(req.params.id)
    })
    if (!anyUser) {
        res.status(400).send('user not found')
        return;
    }

    let index = userApi.indexOf(anyUser);
    userApi.splice(index, 1);
    res.send('user deleted')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
})