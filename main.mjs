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

lms.add(history);
lms.add(asds);
lms.remove(asds);


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
  dateOfBirth: "552", 
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
  sex: "male",
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
  dateOfBirth: "002.02.1111", 
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
  sex: "male",
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
  dateOfBirth: "002.02.1111",
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
  sex: "male",
  subjects: [
    {
      subject: "stasdasdring"
    }
  ],
  description: "asdasd",
};


const teachers = new TeachersModel();

const teacherId = teachers.add(data);

teachers.read(teacherId)

const teacherId2 = teachers.update(teacherId, updatedProfile)

teachers.remove(teacherId)


//finish teachers module



let data2 = {
  name: {
    first: "pupils",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111",
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
  description: "asdasd",
};

let updatedProfile2 = {
  name: {
    first: "asdasdas",
    last: "dokvadze"
  },
  image: "sdasdas",
  dateOfBirth: "002.02.1111",
  phones: [
    {
      phone: '5982562622',
      primary: false
    }
  ],
  sex: "male",
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

// console.log(groups.addPupil(groupId, pupil))

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


const pupilId = pupil.id;
const teacherId3 = teacherId;
const gradebooks = new GradeBooksModel(groups, teachers, lms);

const level = 1;
const gradebookId = gradebooks.add(level, groupId);

gradebooks.clear();

const record = {
  pupilId: pupilId,
  teacherId: teacherId3,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

let asss = {
  name: 'Oliver Black',
  records: [
    {
      teacher: 'Elizabeth Holms',
      subject: 'History',
      lesson: 1,
      mark: 9
    }
  ]
}

console.log(record)

// gradebooks.addRecord(gradebookId, record);

const oliver = gradebooks.read(gradebookId, pupilId);

console.log(gradebooks.add(level, groups.id))
