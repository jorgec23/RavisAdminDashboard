export default async function handler(req, res) {
    const {word1, word2} = req.query;
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.applicationsEndpoint}?${process.env.applicationsWord1}=${word1}&${process.env.applicationsWord2}=${word2}`);
        const data = await newRes.json();
        res.status(201).json(data);
    }
    else {res.status(400)}
}