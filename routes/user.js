const express = require('express')
const router = express.Router()
const {usuariosGet, usuariosPost, usuariosPut , usuariosDelete} = require('../controllers/user.controller')


router.get('/api', usuariosGet)


router.post('/api',usuariosPost)



router.put('/api/:id',usuariosPut)
router.put('/api', (req,res)=>{
    res.status(404).json({
   mensaje: 'Acceso denegado'
    })
})



router.delete('/api',usuariosDelete)




module.exports = router;