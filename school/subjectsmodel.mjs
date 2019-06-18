import { ValidatorModel } from './validatormodel.mjs';

export class SubjectsModel {
   constructor(obj) {
       this.schema = {
           "title": "string",
           "lessons": "number"
       };
       if (ValidatorModel.validator(obj, this.schema)) {
           this.id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 1000);
           this.title = obj.title;
           this.lessons = obj.lessons;
           if (obj.description && typeof obj.description === "string") {
               this.description = obj.description;
           }
       } else {
           throw new Error('ERRRor');
       }
   }
}
