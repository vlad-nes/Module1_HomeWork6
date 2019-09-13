console.log(studentsArr)

class Student {
  constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.course = course;
    this.startYear = startYear;
    this.endYear = endYear;
    this.selfPayment = selfPayment;
    this.faculty = faculty;
    this.ratingPoint = ratingPoint;
    studentsArr.push(this);
  };

  getFullInfo() {
    return `${this.name} ${this.surname}, учащийся на факультете ${this.faculty}, рейтинговая оценка - ${this.ratingPoint}, выпуск в ${this.endYear}`
  };

  getRankedPlace() {
    studentsArr.sort((a, b) => b.ratingPoint - a.ratingPoint);

    return studentsArr.findIndex(student => student.id == this.id) + 1;
  };
};



class Intern extends Student {
  constructor(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint, companyName) {
    super(id, name, surname, course, startYear, endYear, selfPayment, faculty, ratingPoint);
    this.companyName = companyName;
  };

  getFullInternInfo() {
    return `${this.getFullInfo()}, проходит интернатуру на фирме - ${this.companyName}`
  };

  get currentCourse() {
    let studCourse = new Date().getFullYear() - this.startYear;
    return studCourse + 1;
  };

  set currentCourse(course) {
    this.cource = course;
    this.startYear = new Date().getFullYear();
    this.endYear = this.startYear + 4;    
  };
};

let studentIntern = new Intern (8, "Andrey", "Ivanov", 1, 2019, 2023, false, "JS", 10, 'QA-inc');
// studentIntern.currentCourse = 3;
// console.log(studentIntern.endYear);
// console.log(studentIntern.getFullInternInfo());
// console.log(studentIntern.getRankedPlace());
// console.log(studentIntern.currentCourse);

