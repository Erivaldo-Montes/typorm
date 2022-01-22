import { response, Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/class';
import ClassRepository from '../repositories/classRepository';

const classRoutes = Router();

classRoutes.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const { duration, name } = request.body;
    const className = repo.create({
      duration,
      name,
      updated_at: new Date(),
    });
    const res = await repo.save(className);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message: ', err);
  }
});

classRoutes.get('/', async (request, response) => {
  response.json(await getRepository(Class).find());
});

classRoutes.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);

  const res = await repository.findByName(request.params.name);
  response.json(res);
});
export default classRoutes;
