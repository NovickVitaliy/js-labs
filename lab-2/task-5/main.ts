import {CourseManager} from "./course-manager";
import {OnlineCourse} from "./online-course";

const student1 = "1";
const student2 = "2";
const student3 = "3";
const student4 = "4";
const student5 = "5";
const student6 = "6";
const student7 = "7";

const courseManager = new CourseManager();
const english = new OnlineCourse(50, "English", [student1, student2, student3]);
const dotnet = new OnlineCourse(100, ".NET Development", [student1, student2,
    student3, student4, student5, student6, student7]);
const angular = new OnlineCourse(999, "Angular Development", [student7, student3, student6, student4]);

courseManager.addCourse(english);
courseManager.addCourse(dotnet);
courseManager.addCourse(angular);

let englishCourse = courseManager.findCourse("English");
if(englishCourse){
    console.log("English course found");
}

let anotherCourse = courseManager.findCourse("Another");
if(!anotherCourse){
    console.log("Another course was not found");
}

console.log(english);
console.log(dotnet);
console.log(angular);

