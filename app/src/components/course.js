export function createCourseCard(course, index, onDelete, onOpen){
  const div = document.createElement('div');
  div.className='card';
  div.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.desc || ''}</p>
    <button class='btn open'>Open</button>
    <button class='btn delete'>Delete</button>
  `;
  div.querySelector('.delete').onclick = ()=>onDelete(index);
  div.querySelector('.open').onclick = ()=>onOpen(index);
  return div;
}