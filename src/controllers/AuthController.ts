import { Request, Response } from 'express';
import axios from 'axios';
import bcrypt from 'bcrypt';
import { ResponseHandler, StatusCode } from '../utils/ResponseHandler';

export class AuthController extends ResponseHandler {
  constructor(private api: string) {
    super('gateway', 'AuthController'); // mozna dodac ten pierwszy argument (microservice) jako zmienna srodowiskowa
  }

  public async signup(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;

    try {
      const response = await axios.post(`${this.api}/register`, {
        username,
        email,
        password,
      });
      res.status(response.status).send(response.data);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: (err as Error).message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const response = await axios.post(`${this.api}/login`, { email, password });
      console.log('in');
      res.status(response.status).send(response.data);
    } catch (err) {
      this.sendResponse(res, StatusCode.ERROR, (err as Error).message);
      // res.status(500).json({ error: 'Internal server error', details: (err as Error).message });
    }
  }
}
