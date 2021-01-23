import { NextApiRequest, NextApiResponse } from "next";
import { getDistrictData } from "../../../services/district";

const CACHE_CONTROL_HEADER_VALUE =
  "max-age=0, s-maxage=20, stale-while-revalidate, public";

const action = async (req: NextApiRequest, res: NextApiResponse) => {
  let { id } = req.query;
  id = Array.isArray(id) ? id[0] : id;

  const district = getDistrictData(id);

  res.setHeader("Cache-Control", CACHE_CONTROL_HEADER_VALUE);
  res.status(200);
  res.json(district);
};

export default action;
