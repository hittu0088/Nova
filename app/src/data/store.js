export function getCourses(){
  return JSON.parse(localStorage.getItem('courses')||'[]');
}

export function saveCourses(courses){
  localStorage.setItem('courses', JSON.stringify(courses));
}