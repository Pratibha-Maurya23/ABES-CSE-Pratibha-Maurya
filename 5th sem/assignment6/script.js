const students = [
  {
    Name:"Rahul Tyagi",
    rollno:179,
    course:"Btech",
    branch:"CSE",
    year:3
  },
  {
    Name:"Queen Alizabeth",
    rollno:199,
    course:"Btech",
    branch:"CS",
    year:3
  },
  {
    Name:"Pratibha Maurya",
    rollno:189,
    course:"Btech",
    branch:"CS",
    year:3
  },
  {
    Name:"Rani Victoriya",
    rollno:155,
    course:"Btech",
    branch:"IT",
    year:3
  },
  {
    Name:"Aishwarya Rai Bachchan",
    rollno:132,
    course:"Btech",
    branch:"ECE",
    year:3
  },
]




const matched = document.querySelector(".matched");
const unmatched = document.querySelector(".unmatched");
let count1 = 1, count2 = 1;
students.forEach(element => {
  if(element.branch == "CS"){
    matched.innerHTML += `
        <span>Student ${count1}</span>
        <ul class="listOfStudent">
        <li><span class="subSection">Name: </span>${element.Name} </li>
        <li><span class="subSection">RollNo:</span> ${element.rollno} </li>
        <li><span class="subSection">Course: </span>${element.course}</li>
        <li><span class="subSection">Branch: </span>${element.branch}</li>
        <li><span class="subSection">Year: </span>${element.year}</li>
      </ul>`
      count1++;
  }else{
       unmatched.innerHTML += `
        <span>Student ${count2}</span>
        <ul class="listOfStudent">
        <li><span class="subSection">Name: </span>${element.Name} </li>
        <li><span class="subSection">RollNo:</span> ${element.rollno} </li>
        <li><span class="subSection">Course: </span>${element.course}</li>
        <li><span class="subSection">Branch: </span>${element.branch}</li>
        <li><span class="subSection">Year: </span>${element.year}</li>
      </ul>`
      count2++;
  }
});