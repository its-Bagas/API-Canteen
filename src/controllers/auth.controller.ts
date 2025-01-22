import { Request, Response } from "express";
import { UserService } from '../services/user.service'
import bcrypt from 'bcrypt'

const userService = new UserService(); 

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    const existingUser = await userService.findEmail(email);

    if (existingUser) {
       res.status(409).json({ error: 'Email is already in use' }); 
    }

    const userData = { email, password, role };

    const users = await userService.createUser(userData)
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};


export const loginUser  = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await userService.findEmail(email);
  
      if (!user) {
         res.status(401).json({ error: 'Invalid email or password' });
         return
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         res.status(401).json({ error: 'Invalid email or password' });
         return
      }
  
      const token = await userService.generateToken(user.id, user.role);
      res.status(200).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to login' });
    }
  };