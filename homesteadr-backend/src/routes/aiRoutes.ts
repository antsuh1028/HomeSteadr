import express from 'express';
import { exaSearch, queryGroq } from '../services/aiQuery';

const router = express.Router();

router.get('/', async(req, res) => {
    const data = await queryGroq('hello groq');// <----------
    // res.json({
    //     success: true,
    //     data: 'hello this is a route!!!!'
    // });
    res.json({data: data})
});


router.get('/articles', async(req, res) => {

    const today = new Date('2025-01-25');
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);


    const data = await exaSearch('ai data center developments' , {
        numResults: 3,
        startPublishedDate: lastWeek,
        endPublishedDate: yesterday,
    });
    res.json(data);
});







export default router;