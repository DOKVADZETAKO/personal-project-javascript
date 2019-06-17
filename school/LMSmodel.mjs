export class LMSModel {
    constructor() {
        this.data = new Map();
    }

    add(obj) {
        if (!obj || typeof obj == "object") {
            this.data.set(obj.id, obj)
        } else {
            throw new Error("Errror")
        }
        console.log(this.data)
    }

    remove(obj) {
        if (obj || typeof obj == "object") {
            this.data.delete(obj.id)
        } else if(!(this.data.get(obj))) {
            throw new Error("Errror")
        }
        console.log(this.data)
    }

    verify(obj){
        return this.data.has(obj.id)
    }
    readAll(){
        if(arguments.length > 0){
            throw new Error("Errror")
        }else{
            return Array.from(this.data.values())
        }
    }
    
}