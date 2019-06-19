export class GradeBooksModel {
    constructor(groups, teachers, lms) {
        this.grades = new Map();
        this.groups = { groups };
        this.teachers = { teachers };
        this.lms = {lms};
    }
    add(level, id) {
        if (typeof id == 'number' && typeof level == 'number') {
            let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            this.grades.set(id, { level, id })
            return id;
        }
        else {
            throw new Error('error');
        }
    }
    clear(argument) {
        if (!argument) {
            this.grades.clear();
        }
    }

    addRecord(gradebookId, record) {
        if (this.groups.get("id") == gradebookId) {
            this.grades.set("records", record);
        }
        else {
            throw new Error("error")
        }
    }
    read(gradebookId, pupilId) {
        this.grades.get(gradebookId)
    }

    readAll(gradebookId) {
        if (this.groups.get("id") == gradebookId) {
            return Array.from(this.groups);
        }
        else {
            throw new Error("error!")
        }
    }
}
