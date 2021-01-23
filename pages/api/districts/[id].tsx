import { NextApiRequest, NextApiResponse } from "next";
import { District } from "../../../interfaces";

const CACHE_CONTROL_HEADER_VALUE =
  "max-age=0, s-maxage=20, stale-while-revalidate, public";

const action = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const resBody: District = {
    id,
    name: "Distrito",
    totalVacinated: 10,
    lastUpdated: new Date(),
  };

  res.setHeader("Cache-Control", CACHE_CONTROL_HEADER_VALUE);
  res.status(200);
  res.json(resBody);
};

export default action;
