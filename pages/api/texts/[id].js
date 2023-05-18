// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getText } from "../../firebase";

export default async function quiz(req, res) {
  const postId = req.query.id;

  await getText(postId).then((response) => {
    res.status(200).json(response);
  });
}
