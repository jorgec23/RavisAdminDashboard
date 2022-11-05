export default async function handler(req, res) {
    const {word1} = req.query;
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.singleApplicationEndpoint}?${process.env.singleApplicationKeyword}=${word1}`);
        const data = await newRes.json();
        res.status(201).json(data);
    }
    else {res.status(400)}
}