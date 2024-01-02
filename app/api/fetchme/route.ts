import { NextApiRequest, NextApiResponse } from "next";

const add = (a: number, b: number): number => a + b;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = add(req.body.number_one, req.body.number_two);
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error!" });
  }
};