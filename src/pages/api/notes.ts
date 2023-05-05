import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
  // Create new Note
  if (req.method === 'POST') {
    try {
      // todo
      const { title, blocks } = req.body;

      const note = await prisma.note.create({
        data: {
          title, blocks
        }
      })

      res.status(200).json(note)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
    }

  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported` })
  }
}