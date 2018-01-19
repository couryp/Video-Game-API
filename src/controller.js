const models = require('./models')

const getAllHeroes = (req, res, next) => {
  const response = models.getAllHeroes()
  res.json({data : response})
}

const createHero = (req, res, next) => {
  const { name, role, skill, fun } = req.body
  if (!name || !role || !skill || fun == undefined) return next({ status: 400, message: 'Fields Required: Name, Role, Skill and Fun'})
  const response = models.createHero(name, role, skill, fun)
  res.status(201).json({ data: response})
}

const getHeroById = (req, res, next) => {
  const id = req.params.id
  const response = models.getHeroById(id)
  if (!response) return next({ status: 404, message: `Could not find Hero with id of ${id}`})
  res.json({ data: response})
}

const updateHeroById = (req, res, next) => {
  const id = req.params.id
  const response = models.updateHeroById(id, req.body)
  if (!response) return next({ status: 404, message: `Could not find Hero with id of ${id}`})

  const { name, role, skill, fun } = req.body
  if(name || role || skill || !fun === undefined) return next({ status: 400, message : `Required Fields: name, role, skill, fun`})
  res.status(200).json({ data: response })
}

const deleteHero = (req, res, next) => {
  const id = req.params.id
  const response = models.deleteHero(id)
  if(!response) return next({ status: 420, message: `Enhance that calm because we couldn't find that Hero.`})

  res.status(200).json({ data: response })
}





module.exports = {
  getAllHeroes, createHero, getHeroById, updateHeroById, deleteHero

}
