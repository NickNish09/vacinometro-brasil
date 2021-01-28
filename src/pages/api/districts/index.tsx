import { NextApiRequest, NextApiResponse } from "next";
import { getCasesData } from "../../../services/casesData";

const CACHE_CONTROL_HEADER_VALUE =
  "max-age=0, s-maxage=7200, stale-while-revalidate, public";

const action = async (_: NextApiRequest, res: NextApiResponse) => {
  const districts = await getCasesData();

  if (districts) {
    res.setHeader("Cache-Control", CACHE_CONTROL_HEADER_VALUE);
    res.status(200);
    return res.json(districts);
  }

  res.status(404);
  return res.json({ error: "no data found" });
};

export default action;
