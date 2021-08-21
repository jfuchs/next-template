import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: Math.random() > 0.5 ? "Hello" : "Howdy" })
}
