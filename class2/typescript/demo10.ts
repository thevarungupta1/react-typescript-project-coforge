class Student {
  constructor(
    public studentId?: number,
    public firstName?: string,
    public lastName?: string
  ) {}

  
}

const student = new Student()
const student1 = new Student(100)
const student2 = new Student(100, 'Mark')
const student3 = new Student(100, '', '')