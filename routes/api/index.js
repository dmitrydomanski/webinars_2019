const OrderRouter = require('express').Router();

function hndlePathOne (req, res) {
    res.send('Path 1 hit')
}

OrderRouter.get('/path1', hndlePathOne);

module.exports = OrderRouter;