const router = require('express').Router()

//exportar 
router.post('/login', (req, res) => res.json({ sucess: true }))

module.exports = router