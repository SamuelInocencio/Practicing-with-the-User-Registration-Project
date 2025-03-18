import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/usuarios', async (request, response) => {
  const users = await prisma.user.findMany();

  response.status(200).json(users);
});

app.post('/usuarios', async (request, response) => {
  const user = await prisma.user.create({
    data: {
      name: request.body.name,
      email: request.body.email,
      age: request.body.age,
    },
  });
  response.status(201).json(user);
});

app.put('/usuarios/:id', async (request, response) => {
  const user = await prisma.user.update({
    where: {
      id: request.params.id,
    },
    data: {
      name: request.body.name,
      email: request.body.email,
      age: request.body.age,
    },
  });

  response.status(200).json(user);
});

app.delete('/usuarios/:id', async (request, response) => {
  const user = await prisma.user.delete({
    where: {
      id: request.params.id,
    },
  });
  response.status(200).json({message: `Usuário ${user.name} deletado com sucesso!`});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
Mongodb
Username: samuelferreirainocencio
Password: M8GU1t24P6smrkOG
*/
