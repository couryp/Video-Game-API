const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.getAllHeroes)
router.post('/', controller.createHero)
router.get('/:id', controller.getHeroById)
router.put('/:id', controller.updateHeroById)
router.delete('/:id', controller.deleteHero)

module.exports = router
