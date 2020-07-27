import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {

  courses;
  viewMode = 'Something else';
  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  isCoursesInitialized() {
    return Array.isArray(this.courses);
  }
 
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({id: 4, name:"Course 4", count: 0});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1); 
  }

  onChange(course) {
    course.count++;
    course.name = course.name + course.count;
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: "Course 1", count: 0},
      {id: 2, name: "Course 2", count: 0}, 
      {id: 3, name: "Course 3", count: 0}
    ];

  }


  constructor() { }

  ngOnInit(): void {
  }

}
