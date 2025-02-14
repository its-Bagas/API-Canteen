import { Request, Response } from "express";
import { UserService } from '../services/user.service'
import bcrypt from 'bcrypt'

const userService = new UserService(); 

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const existingUser = await userService.findEmail(userData.email);

    if (!existingUser) {
      const users = await userService.createUser(userData);
      res.status(201).json(users);
      return
    } 

    res.status(409).json({ message: "Email already exists" });
  } catch (error) {
     res.status(500).json({ error });
     return;
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