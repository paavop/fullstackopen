require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
const Person = require('./models/person')

app.use(express.static('build'))

app.use(bodyParser.json());
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      (tokens.method(req, res) === 'POST' && req.body) ? JSON.stringify(req.body) : '',
    ].join(" ");
  })
);
app.use(cors());

app.get("/info", (req, res) => {
  Person.find({}).then(people => {
    const time = new Date();
    res.send(
      `<div>Phonebook has info for ${people.length} people<br>${time}</div>`
    );
  })
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then(people => {
    res.json(people)
  })
});

app.get("/api/persons/:id", (request, response) => {
  console.log(request.params.id)
  Person.findById(request.params.id).then(person => {
      if (person) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error);
      response.status(400).send({
        error: 'malformatted id'
      })
    })
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing"
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    console.log('person saved!')
    response.json(savedPerson.toJSON());
  })
});

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
