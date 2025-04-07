import jwt from 'jsonwebtoken';

const mysecret = 'AvilaTekVamoArriba'

const sigIn = (token, mySecret) => {
    return jwt.verify(token, mySecret, {
      expiresIn: "1h",
    });
}

const token = sigIn(payload, mysecret);
console.log(token)