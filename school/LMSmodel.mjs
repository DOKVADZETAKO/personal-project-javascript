export class LMSModel {
    constructor() {
        this.data = new Map();
    }

    add(obj) {
        if (obj && typeof obj === 'object' && obj.id) {
            this.data.set(obj.id, obj)
        } else {
            throw new Error("Errror")
        }
    }


    remove(obj) {
        if (this.data.has(obj.id)) {
            this.data.delete(obj.id);
        } else {
            throw new Error('Error delete');
        }
    }

    verify(obj) {
        return this.data.has(obj.id) ? true : false;
    }

    readAll() {
        return [this.data]
    }

}
