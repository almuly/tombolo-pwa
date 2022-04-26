import {data} from "../../../datbase/data";


export default function handler(req, res) {
    let arr = data
    if (req.method === 'GET') {
        res.status(200).json(arr)
    } else if (req.method === 'POST') {
        const body = req.body
        arr.push(body)
        res.status(201).json({message: "Project successfully created", data: arr});
    } else if (req.method === 'PUT') {
        const body = req.body
        let index = arr.findIndex(i => i.id === body.id)
        arr[index] = {...arr[index], ...body}
        res.status(201).json({message: "Project successfully updated", data: arr});
    } else if (req.method === 'DELETE') {
        const body = req.body
        let index = arr.findIndex(i => i.id === body.id)
        arr.splice(index, 1)
        res.status(201).json({message: "Project successfully deleted", data: arr});
    }
}