import express from 'express';

const router = express.Router();

router.get('/', async(req, res) => {
    res.json({
        success: true,
        data: 'hello this is a route!!!!'
    });
});


export default router;