document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
const session= document.getElementById("session").value;
const branch= document.getElementById("branch").value;
const year= document.getElementById("Year-sem").value;
const sub= document.getElementById("sub").value;
const teacher= document.getElementById("teacher").value;
const student= document.getElementById("student").value;
const enroll= document.getElementById("enroll").value;


// -------------------------------------
document.getElementById("Session").textContent=session;
document.getElementById("Branch").textContent=branch;
document.getElementById("Year").textContent=year;
document.getElementById("Subject").textContent=sub;
document.getElementById("Teacher").textContent=teacher;
document.getElementById("Student").textContent=student;
document.getElementById("Enroll").textContent=enroll;



const element = document.getElementById("paging");
html2pdf().from(element).save(`${student}_PracticalFrontPage.pdf`);
});