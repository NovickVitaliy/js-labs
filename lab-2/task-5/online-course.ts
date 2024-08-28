import {Course} from "./course";

export class OnlineCourse implements Course {
    durationInHours: number;
    name: string;
    students: string[];

    constructor(durationInHours: number, name: string, students: string[]) {
        this.durationInHours = durationInHours;
        this.name = name;
        this.students = students;
    }

    isStudentRegistered(student: string): boolean {
        return this.students.some(stud => stud === student);
    }

    registerStudent(student: string): void {
        if(this.isStudentRegistered(student)){
            throw new Error("Student is already registered");
        }

        this.students.push(student);
    }


}