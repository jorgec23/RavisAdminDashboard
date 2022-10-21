
export default async function handler(req, res) {
    const {word1, word2} = req.query;
    
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.ordersEndpoint}?${process.env.inventorySecretWord1}=${word1}&${process.env.inventorySecretWord2}=${word2}`);
        const data = await newRes.json();
        // console.log('word1',word1, 'word2', word2);
        res.status(201).json(data);
    }
    else {res.status(400)}
}