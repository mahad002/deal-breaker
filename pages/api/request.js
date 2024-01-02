import { mongooseConnect } from "@/lib/mongoose";
import { Request } from "../../models/request";

export default async function handle(req, res) {
    const { method } = req;

    try {
        await mongooseConnect();
        // const session = await getServerSession(req, res, authConf);

        if (method === 'POST') {
            const { title, description, product, to,  from, quantity, approved, rejected } = req.body;
            const requestDoc = await Request.create({
                title,
                description,
                product,
                to,
                from,
                quantity,
                approved,
                rejected,
            });
            res.status(201).json(requestDoc);
        }

        if (method === 'GET') {
            if (req.query?.id) {
                const request = await Request.find({ _id: req.query.id });
                if (!request) {
                    console.log("Here");
                    return res.status(404).json({ error: 'Request not found' });
                }
                res.json(request);
            } else if (req.query?.userFrom) {
                const requestsFrom = await Request.find({ from: req.query.userFrom });
                res.json(requestsFrom);
            } else if (req.query?.userTo) {
                console.log("Here");
                const requestsTo = await Request.find({ to: req.query.userTo });
                res.json(requestsTo);
            }  else {
                const requests = await Request.find({});
                res.json(requests);
            }
        }

        if (method === 'PUT') {
            const { title, description, product, to,  from, quantity, approved, rejected, _id } = req.body;
            const updatedRequest = await Request.findByIdAndUpdate(
                _id,
                { title, description, product, to,  from, quantity, approved, },
                { new: true }
            );
            if (!updatedRequest) {
                return res.status(404).json({ error: 'Request not found' });
            }
            res.json(updatedRequest);
        }

        if (method === 'DELETE') {
            if (req.query?.id) {
                const deletedRequest = await Request.findByIdAndDelete(req.query?.id);
                if (!deletedRequest) {
                    return res.status(404).json({ error: 'Request not found' });
                }
                res.json(true);
            }
        }
    } catch (error) {
        console.error('Error in request.js:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
