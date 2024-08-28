export interface Course {
    name: string;
    durationInHours: number;
    students: string[];

    registerStudent(student: string): void;
    isStudentRegistered(student: string): boolean;
}