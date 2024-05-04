function gradeCalc(grade, unit) {
    if (grade === "10") {
      return 10 * unit;
    } else if (grade === "9") {
      return 9 * unit;
    } else if (grade === "8") {
      return 8 * unit;
    } else if (grade === "7") {
      return 7 * unit;
    } else if (grade === "6") {
      return 6 * unit;
    } else if (grade === "5") {
      return 5 * unit;
    } else if (grade === "FAIL") {
      return 0 * unit;
    }
  }
  
  let counter = 1;
  
  function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="0">FAIL</option>
      </select>  
    </form>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
  }
  
  function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm?.remove();
  }
  
  const reports = [];
  
  /**
   * @description calculates cgpa
   */
  function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;
  
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const gradeValue = selectedGrade.text.toUpperCase();
      listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);
  
    let totalEarnedUnits = 0;
  
    for (let i = 0; i < listOfUnits.length; i++) {
      totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    const gpa = totalEarnedUnits / totalUnits;
    
    if (gpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);   
    } else {
      CGPAPARAGRAPH.textContent = "Please enter a valid grade and credit units";    
    }
    
  }
  