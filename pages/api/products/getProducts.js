

export default async function handler(req, res) {
    const {word1, word2} = req.query;
    const mult = word1*word2;
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.inventoryEndpoint}?${process.env.inventorySecretWord1}=${word1}&${process.env.inventorySecretWord2}=${mult}`);
        const data = await newRes.json();
        // console.log('word1',word1, 'word2', word2);
        res.status(201).json(data);
    }
    else {res.status(400)}
}
