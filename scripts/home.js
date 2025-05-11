



const courses = [
    {
      code: 'CSE 210',
      name: 'Programming with Classes',
      credit: 2,
      completed: true,
      type: 'CSE'
    },
    {
      code: 'WDD 100',
      name: 'Web Design and Development Fundamentals',
      credits: 3,
      completed: true,
      type: 'WDD'
    },
    {
      code: 'CSE 201',
      name: 'Introduction to Computer Science',
      credits: 4,
      completed: false,
      type: 'CSE'
    },
    {
      code: 'WDD 200',
      name: 'Advanced Web Design and Development',
      credits: 3,
      completed: false,
      type: 'WDD'
    },
    {
      code: 'CSE 301',
      name: 'Data Structures and Algorithms',
      credits: 4,
      completed: true,
      type: 'CSE'
    },
    {
      code: 'WDD 231',
      name: 'Frontend Web Development I',
      credit: 2,
      completed: false,
      type: 'WDD'
    }
];

const courseList = document.getElementById('course-list');
const totalCredits = document.getElementById('total-credits');

function displayCourses(filteredCourses) {
    courseList.innerHTML = '';
    let totalCreditsCount = 0;

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');
        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
          <h5>${course.code}</h5>

        `;
            


        courseList.appendChild(card);
        totalCreditsCount += course.credits;
        
    });

    totalCredits.textContent = `Total Credits: ${totalCreditsCount}`;
}

displayCourses(courses);

document.getElementById('btn-all').addEventListener('click', () => displayCourses(courses));
document.getElementById('btn-wdd').addEventListener('click', () => displayCourses(courses.filter(course => course.type === 'CSE')));
document.getElementById('btn-cse').addEventListener('click', () => displayCourses(courses.filter(course => course.type === 'WDD')));


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
  });
  

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

