import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3001;

const users = [];

app.get('/usuarios', (request, response) => {
   response.status(200).json(users);
});

app.post('/usuarios', (request, response) => {
  users.push(request.body);

  response.status(201).json({message: "Usuário criado com sucesso!"});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
Mongodb
Username: samuelferreirainocencio
Password: M8GU1t24P6smrkOG
*/