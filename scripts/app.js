const studentFullName = "Paurav";
console.log(studentFullName);
const studentNumber = 1194984;
console.log(studentNumber);
console.log(`${studentFullName}-${studentNumber}`);

const headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.innerHTML = `${studentFullName}-${studentNumber}`;
console.log(headerContent.classList);