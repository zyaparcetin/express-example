/* const express = require('express')
const { users } = require('../models')

const router = express.Router()

/* GET users listing. */
/* router.get('/', (req, res) => {
  res.send(users)
})

router.get('/armagan', (req, res) => {
  res.send(users[0])
})

router.get('/:name', (req, res) => {
  const user = users.find(u => u.name === req.params.name)

  if (!user)
    return res.render('error', {
      error: { status: 404 },
      message: `No user with name ${req.params.name} found`,
    })

  return res.send(user)
})

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId])
})

module.exports = router */
