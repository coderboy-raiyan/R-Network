const router = require('express').Router();
const routes = require('../routes');

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is Healthy' });
});
router.use(routes);

module.exports = router;
