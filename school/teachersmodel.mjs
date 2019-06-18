import { ValidatorModel } from './validatormodel.mjs';

export class TeachersModel {
    constructor() {
        this.data = new Map();
        this.id = Math.floor(Math.random() * 100000000)
        this.schema = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string",
            "emails": [
                {
                    "email": "string",
                    "primary": "boolean"
                }
            ],
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string",
            "subjects": [
                {
                    "subject": "string"
                }
            ],
            "description": "string",
        }


    }


    add(teacher) {
        if (ValidatorModel.validator(teacher, this.schema)) {
            let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            this.data.set(id, teacher);
            return id;

        }
        else {
            throw new Error("Not valid parameters!");
        }
    }

    read(teacherId) {
        if (this.data.has(teacherId)) {
            return this.data.get(teacherId);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

    remove(teacherId) {
        if (this.data.has(teacherId)) {
            this.data.delete(teacherId);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

    update(id, obj){
        
    }

}












//     update(id, obj) {
//         if (!id || typeof id.id != "number") {
//             throw new Error("Error")
//         }
//         else if (!obj || typeof obj != "object") {
//             throw new Error("Error")
//         }

//         const user = this.data.get(id.id)
//         if (user) {
//             if (ValidatorModel.validator(obj)) {
//                 this.data.set(id, { ...user, ...obj })
//                 return this.data.get(id)
//             }

//         } else {
//             throw new Error("Error")
//         }
//     }



