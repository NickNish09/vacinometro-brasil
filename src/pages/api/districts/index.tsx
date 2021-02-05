import { NextApiRequest, NextApiResponse } from "next";
import { getCasesData } from "../../../services/casesData";
import filterDistrictsByDate from "../../../utils/filterDistrictsByDate";
import filterDistrictsById from "../../../utils/filterDistrictsById";

const CACHE_CONTROL_HEADER_VALUE =
  "max-age=0, s-maxage=7200, stale-while-revalidate, public";

const action = async (req: NextApiRequest, res: NextApiResponse) => {
  let districts = await getCasesData();
  const { id, date } = req.query;

  if (id) {
    districts = Array.isArray(id)
      ? filterDistrictsById(districts, id[0])
      : filterDistrictsById(districts, id);
  }

  if (date) {
    districts = Array.isArray(date)
      ? filterDistrictsByDate(districts, date[0])
      : filterDistrictsByDate(districts, date);
  }

  if (districts) {
    res.setHeader("Cache-Control", CACHE_CONTROL_HEADER_VALUE);
    res.status(200);
    return res.json(districts);
  }

  res.status(404);
  return res.json({ error: "no data found" });
};

export default action;
