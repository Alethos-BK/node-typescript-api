import Schema from "./schemas/customerSchema";
import { Request, Response, NextFunction } from 'express';

export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = Schema.costumerSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }
  
    next();
};