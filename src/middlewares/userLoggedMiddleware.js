//Middleware creado para mostrar partes de la nav-bar si es que el usuario esta logueado o no// //aqui tambien estan la config de las cookies
function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  //EN ESTE TROZO DE CODIGO STEAMOS LAS COOKIES PARA MANTENER LA SESION INICIADA//
  let userInCookie = req.cookies.user;
  
  if(userInCookie){
    if(userInCookie.rol == 'superadmin'){
      req.session.adminLogged = userInCookie;
    } else {
      req.session.userLogged = userInCookie;
    }
  }
  //ESTE TROZO DE CODIGO COMENTADO ES PARA HACER LA COMPROBACION DEL USUARIO EN SESION Y MOSTARR PARTES DEL NAV-BAR
  if (req.session.adminLogged)  {
    res.locals.isLogged = true;
    res.locals.adminLogged = req.session.adminLogged;
  } if (req.session.userLogged)  {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }
  next();
}

module.exports = userLoggedMiddleware;
