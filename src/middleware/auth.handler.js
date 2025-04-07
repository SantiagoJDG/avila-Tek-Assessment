import { Boom } from "@hapi/boom";

export const checkAPIKey = (req, res, next) => {

    const apiKey = req.headers['api']

    if (apiKey === '123') {
        next()
    } else {
        next(Boom.unauthorized("API Key no es correcta"))
    }

}