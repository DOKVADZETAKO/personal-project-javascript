import { SubjectsModel,  LMSModel, TeachersModel, ValidatorModel } from './school'

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

const asds = new SubjectsModel({
    title: 'asda',
    lessons: 24
});

console.log(history.id)
console.log(asds)

// finish first modile


const lms = new LMSModel();

lms.add(history);
lms.add(asds);
lms.remove(asds);


console.log(lms.verify(history));

console.log(lms.readAll());
[
  {
    subjectId: null
  }
]

// finish second module


// validator

let as = {
  name: {
    first: "11",
    last: '225'
  },
  image: '55',
  dateOfBirth: "552", // format date
  emails: [
    {
      email: "string@asdasd.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: "5982562622",
      primary: true
    }
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "asdasd"
    }
  ],
  description: '222',
};


let ddd = {
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

console.log(ValidatorModel.validator(as,ddd))

// finish validator

let data = {
  name: {
    first: "tako",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111", // format date
  emails: [
    {
      email: "string@asdasd.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "stasdasdring"
    }
  ],
  description: "asdasd",
};

let updatedProfile = {
  name: {
    first: "ssss",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111", // format date
  emails: [
    {
      email: "string@asdasd.com",
      primary: true
    }
  ],
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "stasdasdring"
    }
  ],
  description: "asdasd",
};


// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

// Create a new teacher
const teacherId = teachers.add(data);

console.log(data)

// will return Teachers data including teacher's id

teachers.read(teacherId)


console.log(teacherId)

// will update Teacher. This method should use the same validation as a constructor method
//  const teacherId = teachers.update(teacherId, updatedProfile)

// console.log(teacherId)

// will remove techer
teachers.remove(teacherId)

console.log(teachers.read(teacherId))






