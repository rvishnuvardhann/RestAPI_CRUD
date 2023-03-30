import express from 'express';
import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router()

let users = []
//all routes are starting with /users
router.get('/', (req, res) => {
    res.send(users);
})

//send data from frontend to back
router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.Firstname} is added `);
});

//sending users data for a specific id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} is deleted`);
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { Firstname, Lastname, Age } = req.body;

    const user = users.find((user) => user.id == id)

    if (Firstname) {
        user.Firstname = Firstname
    }
    if (Lastname) {
        user.Lastname = Lastname
    }
    if (Age) {
        user.Age = Age
    }

    res.send(`User with id ${id} has been updated`);
})

export default router;