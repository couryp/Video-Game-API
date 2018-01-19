const uuid = require('uuid/v4')

const heroData = []

const getAllHeroes = () => {
  return heroData
}

const createHero = (name, role, skill, fun) => {
  const response = { id: uuid(), name, role, skill, fun}
  heroData.push(response)
  return response
}

const getHeroById = (id) => {
  const response = heroData.find(hero => hero.id === id)
  return response
}

const updateHeroById = (id, body) => {
  const response = heroData.find(hero => hero.id === id)
  if (response) {
    response.name = body.name
    response.role = body.role
    response.skill = body.skill
    response.fun = body.fun
  }
  return response
}

const deleteHero = (id) => {
  const response = heroData.find(hero => hero.id === id)
  if (response) {
    const index = heroData.indexOf(response)
    heroData.splice(index, 1)
  }
  return response
}

module.exports = {
  getAllHeroes, createHero, getHeroById, updateHeroById, deleteHero

}
