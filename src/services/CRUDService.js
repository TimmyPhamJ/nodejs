import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFormBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFormBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? false : true,
                roleId: data.roleId,
            });
            resolve('ok! create a new user succeed!');
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
};
