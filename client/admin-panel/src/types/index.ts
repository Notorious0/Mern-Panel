export interface Student {
    _id: string;
    userId: string;
    fullName: string;
    className: string;
  }
  
  export interface Teacher {
    _id: string;
    teacherId: string;
    fullName: string;
    lesson: string;
  }
  
  export interface OneOnOne {
    _id: string;
    userName: string;
    teacherName: string;
    className: string;
    lesson: string;
    date: string;
    startTime: string;
    endTime: string;
    approved: boolean;
  }
  