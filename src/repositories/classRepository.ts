import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/class';

@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
