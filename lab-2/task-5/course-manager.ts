import {Course} from "./course";

export class CourseManager {
    private courses: Course[] = [];
    addCourse(course: Course){
        this.courses.push(course);
    }

    removeCourse(courseName: string): void{
        this.courses = this.courses.filter(c => c.name !== courseName);
    }

    findCourse(courseName: string): Course | undefined{
        return this.courses.filter(c => c.name === courseName)[0];
    }
}