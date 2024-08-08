import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logs';
import { User } from './models/userModel';
import { Account } from './models/accountModel';
import { IController } from '../interfaces/IControllerInterface';
import axios from 'axios';

export class UserController implements IController {
  endpoint = process.env.USERS_SERVICE!;
  constructor(private api: string) {}

  public async getUserID(req: Request, res: Response): Promise<void> {
    try {
      const response = await axios.get(`${this.api}/get-user-id/${req.params.userID}`);
      response.status !== 200
        ? new Error('Internal server error')
        : res.status(200).send(response.data);
    } catch (err) {
      err instanceof Error
        ? res.status(500).json({ error: 'Internal server error', details: err.message })
        : res.status(500).json({ error: 'Internal server error', details: 'Unknown error' + err });
    }
  }
  public async getUserData(req: Request, res: Response): Promise<void> {
    try {
      console.log('getUserData req.params', req.params);
      console.log('users data');
      const response = await axios.get(`${this.api}/get-user-data/${req.params.userID}`);
      console.log(response.data);
      response.status !== 200
        ? new Error('Internal server error')
        : res.status(200).send(response.data);
    } catch (err) {
      err instanceof Error
        ? res.status(500).json({ error: 'Internal server error', details: err.message })
        : res.status(500).json({ error: 'Internal server error', details: 'Unknown error' + err });
    }
  }

  public async getAccounts(req: Request, res: Response): Promise<void> {
    try {
      const response = await axios.get(`${this.api}/get-accounts`);
      response.status !== 200
        ? new Error('Internal server error')
        : res.status(200).send(response.data);
    } catch (err) {
      err instanceof Error
        ? res.status(500).json({ error: 'Internal server error', details: err.message })
        : res.status(500).json({ error: 'Internal server error', details: 'Unknown error' + err });
    }
  }

  public async editData(req: Request, res: Response): Promise<void> {
    try {
      const profile = {
        address: req.body.address,
        fullName: req.body.fullName,
        gender: req.body.gender,
        motherName: req.body.motherName,
        PESEL: !req.body.isCompanyAccount ? req.body.PESEL : null,
        NIP: req.body.isCompanyAccount ? req.body.NIP : null,
        isCompanyAccount: req.body.isCompanyAccount,
      };
      const response = await axios.post(`${this.api}/edit-data`, profile);
      response.status !== 200
        ? new Error('Internal server error')
        : res.status(200).send(response.data);
    } catch (err) {
      err instanceof Error
        ? res.status(500).json({ error: 'Internal server error', details: err.message })
        : res.status(500).json({ error: 'Internal server error', details: 'Unknown error' + err });
    }
  }
}
