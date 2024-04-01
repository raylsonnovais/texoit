import { Request, Response } from 'express';
import FindProducersWithMinAndMaxIntervalService from '../services/FindProducersWithMinAndMaxIntervalService';
import { Pool } from 'pg';

export default class FilmsController {


  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { min, max } = request.body;

      const findProducersService = new FindProducersWithMinAndMaxIntervalService();
      const result = await findProducersService.execute({ min, max });

      return response.json(result);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
