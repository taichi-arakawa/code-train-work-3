// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getTexts } from "../../firebase";

export default async function quiz(req, res) {
  let response = [];
  await getTexts().then((results) => {
    results.forEach((result) => {
      response.push({
        id: result.id,
        data: result.data(),
      });
    });
  });
  res.status(200).json(response);
}
