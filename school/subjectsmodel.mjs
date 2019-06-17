export class SubjectsModel {
  constructor(obj) {
    if (!obj || typeof obj == "object" && typeof obj.title == "string" && typeof obj.lessons == "number") {
      this.id = new Date().getMilliseconds() + Math.floor(Math.random() * 1000);
      this.title =  obj.title
      this.lessons = obj.lessons
      if (obj.description && typeof obj.description == "string") {
        this.description = obj.description
      }
    } else {
      throw new Error('incoreect')
    }
  }

}
