import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

const generateToken = (user: User): string => {
  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, 'SENHASUPERSECRETA');
  return token;
};

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
    // this.generateToken = new UserModel(connection);
  }
  
  public async createUser(user: User): Promise<string> {
    const userLogin = await this.model.createUser(user);
    const token = generateToken(userLogin);
    return token;
  }
}