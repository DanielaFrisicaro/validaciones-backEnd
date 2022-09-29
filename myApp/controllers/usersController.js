//requerir express-validator
const{validationResult} = require('express-validator')

const controller = {

register: (req,res)=>{
    return res.render('register')
},

processRegister:(req,res)=>{
   // return res.send('ok, usando el post')//prueba de ruteo cuando hago el SUBMIT.
    /*return res.send(
       { body: req.body,
        file: req.file})*///para probar que viene por el body del formulario, USAR el URLENCODED
    //el enctype permite en el controller ademas obtener datos del body también incluyendo los datos de tipo "file"
   //return res.render('register')

   const resultValidation = validationResult(req)
   //return res.send(resultValidation)prueba de envío de resultValidation
   if(resultValidation.errors.length >0){//resultValidation es un objeto literal con propiedad "errors" y esa propiedad errors es el array (esto luego de hacer el mapped)
    return res.render('register', {
        errors : resultValidation.mapped() ,//resultValiation es un array que tiene muchas cosas y no me interesa pasarlo con todo, por lo que uso el metodo "mapped"
   //el metodo mapped va a convertir el array de resultValidation en un objeto literal en donde cada obeto literal va a tener muchas propiedades
    //para probar se puede hacer: return res.send(resultValidation.mapped())
        oldData: req.body//esto es para la persistencia de DATOS.
    })
   }
return res.send('Las validaciones se pasaon y no hay errores')
}

}

module.exports = controller;