export class GroupsModel {
    constructor() {
        this.groups = new Map();
        this.schema = {
            id: 'JEF5H43H',
            room: 237
        };
    }

    add(room) {
        if (typeof room === "number") {
            let id = Math.random().toString(36).substr(2, 8);
            this.groups.set("id", id);
            this.groups.set("room", room);
            return this.groups.get("id");
        }
        else {
            throw new Error("must be a number!");
        }

    }

    removePupil(pupil, groupId) {
        if (typeof groupId === "string" && typeof pupilid === "number") {
            if (this.groups.get("id") == groupId) {
                this.groups.clear(groupId);
            } else {
                throw new Error('Error delete');
            }
        }
    }


    addPupil(groupId, pupil) {
        if (typeof pupil === "object" && typeof groupId === "string") {
            if (this.groups.get("id") == groupId) {
                this.groups.set("pupil", pupil);
                return this.groups;
            }
        }
        else {
            throw new Error("invalid");
        }
    }

    update(groupId, object) {
        if (typeof groupId === "string" && typeof object === "object") {
            if (this.groups.get("id") == groupId) {
                Object.keys(object).forEach(key => {
                    let n = key;
                    let m = object[key]
                    this.groups.set(n, m);
                });
            }
        }
        else {
            throw new Error("not valid");
        }
    }

    read(groupId) {
        if (typeof groupId === "string") {
            if (this.groups.get("id") == groupId) {
                return this.groups;
            }
        }
    }

    readAll(argument) {
        if (argument) {
            throw new Error("you passed parameters!");
        }
        else {
            return Array.from(this.groups);
        }
    }
}