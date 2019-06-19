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

   
    update(teacherId, updatedProfile){
        ValidatorModel.validator(updatedProfile, this.schema);
        return this.data.set(teacherId, updatedProfile)
    }


    remove(teacherId) {
        if (this.data.has(teacherId)) {
            this.data.delete(teacherId);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

}


