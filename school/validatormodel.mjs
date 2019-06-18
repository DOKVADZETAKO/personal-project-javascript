export class ValidatorModel {
    constructor() {

    }

    static validator(data, schema) {
        let flag = true
        for (const [key, value] of Object.entries(schema)) {
            if (data.hasOwnProperty(key)) {
                if (typeof data[key] === 'object') {
                    flag = this.validator(data[key], schema[key])
                } else if (typeof data[key] !== 'object' && typeof data[key] !== schema[key]) {
                    flag = false
                }

                if (!flag) {
                    throw new Error('Some Errors')
                }

                if (Array.isArray(data[key])) {
                    for (let each of data[key]) {
                        this.validator(each, schema[key][0])
                    }
                }

            }

        }
        return flag
    }
}










