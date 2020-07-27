import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [];//[{"name": "Course 1"}, {"name": "Course 2"}];
  }
}
