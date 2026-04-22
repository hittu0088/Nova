import {createCourseCard} from './components/course.js';
import {getCourses, saveCourses} from './data/store.js';

const drawer = document.getElementById('drawer');
document.getElementById('menuBtn').onclick = ()=>drawer.classList.toggle('open');

let courses = getCourses();
const list = document.getElementById('courses');

function render(){
  list.innerHTML='';
  courses.forEach((c,i)=>{
    list.appendChild(createCourseCard(c,i,deleteCourse,openCourse));
  });
}

function deleteCourse(i){
  courses.splice(i,1);
  saveCourses(courses);
  render();
}

function openCourse(i){
  localStorage.setItem('currentCourse', JSON.stringify(courses[i]));
  window.location.href = 'pages/course.html';
}

document.getElementById('addCourse').onclick = ()=>{
  const title = prompt('Course title');
  const desc = prompt('Description');
  if(title){
    courses.push({title, desc});
    saveCourses(courses);
    render();
  }
}

render();