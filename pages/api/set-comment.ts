import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // allow cross origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const { user } = req.body;
    const savedUser = await prisma.comments.create({
      data: user,
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
