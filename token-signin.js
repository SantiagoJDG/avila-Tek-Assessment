import jwt from 'jsonwebtoken';

const mysecret = 'AvilaTekVamoArriba'
const payload = {
    sub: 1,
    role: 'admin'
}

const sigIn = (payload, mySecret) => {
    return jwt.sign(payload, mySecret);
}

const token = sigIn(payload, mysecret);
console.log(token)