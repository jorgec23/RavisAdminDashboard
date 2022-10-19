
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.inventoryCountEndpoint}`);
        const data = await newRes.json();
        // console.log('word1',word1, 'word2', word2);
        res.status(201).json(data);
    }
    else {res.status(400)}
}