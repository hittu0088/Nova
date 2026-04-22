const drawer = document.getElementById('drawer');
const toggleBtn = document.getElementById('menuBtn');

if(toggleBtn){
  toggleBtn.onclick = () => drawer.classList.toggle('open');
}

// Local storage courses
let courses = JSON.parse(localStorage.getItem('courses')) || [];

const courseList = document.getElementById('courses');
const addBtn = document.getElementById('addCourse');

function render(){
  if(!courseList) return;
  courseList.innerHTML = '';
  courses.forEach((c,i)=>{
    const div = document.createElement('div');
    div.className='card';
    div.innerHTML = `<h3>${c}</h3><button onclick="deleteCourse(${i})">Delete</button>`;
    courseList.appendChild(div);
  });
}

window.deleteCourse = (i)=>{
  courses.splice(i,1);
  localStorage.setItem('courses', JSON.stringify(courses));
  render();
}

if(addBtn){
  addBtn.onclick = ()=>{
    const name = prompt('Enter course name');
    if(name){
      courses.push(name);
      localStorage.setItem('courses', JSON.stringify(courses));
      render();
    }
  }
}

render();