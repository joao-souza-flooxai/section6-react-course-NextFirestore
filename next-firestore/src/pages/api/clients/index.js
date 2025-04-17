export default function handler(req, res) {

    if (req.method === "GET") {
        handleGet(req, res);
    } else {
        res.status(405).json({
            message: "Request not support for this url."
        });
    }
}

function handleGet(req, res) {
    res.status(200).send(
        req.query
    );
}