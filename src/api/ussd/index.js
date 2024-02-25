const { Router } = require('express');

const router = new Router();

router.post('/', async (request, response) => {
    try {
        console.log(request.body);
        response.setHeader('Content-type', 'text/plain');
        response.send('CON Hi My name is Mufasa');
    } catch (error) {
        response.send('CON Hi My name is Mufasa');
    }
});

module.exports = router;
