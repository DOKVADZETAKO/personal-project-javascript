import { SubjectsModel,  LMSModel} from './school'

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


