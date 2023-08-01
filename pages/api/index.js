// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apis } from '../../api'


export default function handler(req, res) {
    res.status(200).json(apis)
}
