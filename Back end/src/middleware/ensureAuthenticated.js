import pkg from 'express';
const {Request, Response, NextFunction} = pkg;
import pkg1 from 'jsonwebtoken';
const {verify} = pkg1;

//Não sei como passar para frente sem o token
export function ensureAuthenticated(request, response, next){
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({errorCode: "token.invalid"});
    }

    const[,token] = authToken.split(" ");
    try{
        const {sub, jogador} = verify(token, process.env.JWT_SECRET);

        request.id = sub;
        request.nome = jogador.nome;

        return next();

    }catch(err){
        return response.status(401).json({errorCode: "token.expired"});
    }
}

