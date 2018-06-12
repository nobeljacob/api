'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const studentsList = [
    {
        id: 1,
        name: 'abc',
        age: 21,
        dept: 'IT'
    },
    {
        id: 2,
        name: 'def',
        age: 20,
        dept: 'CS'
    },
    {
        id: 3,
        name: 'xyz',
        age: 22,
        dept: 'CS'
    },
    {
        id: 4,
        name: 'pqr',
        age: 21,
        dept: 'IT'
    }
];

app.get('/api/student', (req, resp) => {
    resp.json(studentsList);
});


app.listen(5000);

app.post('/api/student', (req, resp) => {
    console.log(req);
    const newStudent = {
        name: req.body.name,
        age: req.body.age,
        dept: req.body.dept,
        id: studentsList.length + 1
    }
    studentsList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);

});

app.delete('/api/student/:id', (req, resp) => {
    console.log(req);
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentsList.findIndex(student => student.id === idToBeDeleted);
    studentsList.splice(studentToBeDeleted, 1);
    resp.json(idToBeDeleted);
});