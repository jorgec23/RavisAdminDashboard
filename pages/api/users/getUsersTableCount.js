export default async function handler(req, res) {
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.usersCountEndpoint}`);
        const data = await newRes.json();
        res.status(201).json(data);
    }
    else {
        res.status(400)}
}