import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const savedUser = await prisma.comments.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
