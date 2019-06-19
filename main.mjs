import { SubjectsModel, 
         LMSModel, 
         TeachersModel, 
         ValidatorModel,
         PupilsModel,
         GroupsModel,
         GradeBooksModel,
} from './school'

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

const asds = new SubjectsModel({
    title: 'asda',
    lessons: 24
});

// console.log(history.id)
// console.log(asds)

// finish first modile


const lms = new LMSModel();

// lms.add(history);
// lms.add(asds);
// lms.remove(asds);


// console.log(lms.verify(history));

// console.log(lms.readAll());
// [
//   {
//     subjectId: null
//   }
// ]

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

// console.log(ValidatorModel.validator(as,ddd))

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


const teachers = new TeachersModel();

const teacherId = teachers.add(data);

// console.log(data)

// teachers.read(teacherId)


// console.log(teacherId)

const teacherId2 = teachers.update(teacherId, updatedProfile)

// console.log(teacherId2)

// teachers.remove(teacherId)

// console.log(teachers.read(teacherId))

//finish teachers module



let data2 = {
  name: {
    first: "pupils",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111", // format date
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male", // male or female
  description: "asdasd",
};

let updatedProfile2 = {
  name: {
    first: "asdasdas",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111", // format date
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male", // male or female
  description: "asdasd",
};



const pupils = new PupilsModel();

const pupil = pupils.add(data2);

pupils.read(pupil.id)

pupils.update(pupil.id, updatedProfile2)

pupils.remove(pupil.id)


//finish pupils module

const room = 236;
const groups = new GroupsModel();
const groupId = groups.add(room);

console.log(groups.addPupil(groupId, pupil))

groups.removePupil(groupId, pupil.id);


groups.addPupil(groupId, pupil);

groups.update(groupId, {
  room: 237
});

groups.read(groupId);
{
  id: 'JEF5H43H'
  room: 237
}

groups.readAll()


// finish groups model


// const pupilId = pupil.id;
// const teacherId3 = teacherId;
// const gradebooks = new GradeBooksModel(groups, teachers, lms);

// const level = 1;
// const gradebook = gradebooks.add(level, groups.id);

// console.log(gradebook)

// gradebooks.clear();

// const record = {
//   pupilId: pupilId,
//   teacherId: teacherId3,
//   subjectId: history.id,
//   lesson: 1,
//   mark: 9
// };


// gradebooks.addRecord(gradebookId, record);

// const oliver = gradebooks.read(gradebookId, pupilId);
// let data3 = {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }




