import { ValidatorModel } from './validatormodel.mjs';

export class PupilsModel {
    constructor() {
        this.data2 = new Map();
        this.id = Math.floor(Math.random() * 100000000)
        this.schema = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string",
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string",
            "description": "string"
        }


    }


    add(pupil) {
        if (ValidatorModel.validator(pupil, this.schema)) {
            let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            pupil.id =id;
            this.data2.set(id, pupil);
            return this.data2.get(id);

        }
        else {
            throw new Error("Not valid parameters!");
        }
    }

    read(pupilId) {
        if (this.data2.has(pupilId)) {
            return this.data2.get(pupilId);
        }
        else {
            throw new Error("ERRRROR");
        }

    }


    update(pupilId, updatedProfile2) {
        ValidatorModel.validator(updatedProfile2, this.schema);
        return this.data2.set(pupilId, updatedProfile2)
    }


    remove(pupilId) {
        if (this.data2.has(pupilId)) {
            this.data2.delete(pupilId);
        }
        else {
            throw new Error("ERRRROR");
        }

    }

}








