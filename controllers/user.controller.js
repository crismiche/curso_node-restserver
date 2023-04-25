const usuariosGet = (req,res) => {
  const {q, nombre, apellido, limit = 5} = req.query
  res.json({
    mensaje: 'Api get - controlador',
    q,
    nombre,
    apellido,
    limit
  })
}

const usuariosPost = (req,res) => {
  const {usuario,edad,email} = req.body;
    res.json({
        mensaje: 'Api Post - controlador',
        usuario,
        edad,
        email
      })
}


const usuariosPut = (req,res) => {
  const {id} = req.params
    res.json({
        mensaje: 'Api Put - controlador',
        id
      })
}

const usuariosDelete = (req,res) => {
    res.json({
        mensaje: 'Api Delete - controlador'
      })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}