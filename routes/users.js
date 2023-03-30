import express from 'express';
const router = express.Router()

router.get('/users', (res, req) => {
    res.send('Hello')
})
export default router;