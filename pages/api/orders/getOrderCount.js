export default async function handler(req, res) {
    if (req.method === 'GET') {
        const newRes = await fetch(`${process.env.ordersCountEndpoint}`);
        const data = await newRes.json();
//        console.log(' make it here?? 201');
//        console.log(data);
        res.status(201).json(data);
    }
    else {
//        console.log(' make it here? 400');
        res.status(400)}
}