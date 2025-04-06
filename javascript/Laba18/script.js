


let Student = {
    name: "",
    surname: "",
    tabel: {}
};

Student.name = prompt("Введіть ім'я студента");
Student.surname = prompt("Введіть прізвище студента");

while (true) {
    let subject = prompt("Введіть назву предмета");
    if (!subject) break;

    let grade = parseInt(prompt(`Введіть оцінку з предмета "${subject}":`));

    if (isNaN(grade) || grade < 0 || grade > 12) {
        alert("Введіть коректну оцінку (0-12).");
        continue;
    }

    Student.tabel[subject] = grade;
}


let sumGrades = 0;
let subjectsCount = 0;
let badGrades = 0;


for (let subject in Student.tabel) {
    let grade = Student.tabel[subject];
    sumGrades += grade;
    subjectsCount++;
    if (grade < 4) badGrades++;
}


if (badGrades == 0) {
    alert(`Студент ${Student.name} ${Student.surname} переведений на наступний курс`);
} else {
    alert(`Студент має ${badGrades} незадовільних оцінок`);
}


if (subjectsCount > 0) {
    let avgGrade = sumGrades / subjectsCount;
    if (avgGrade > 7) {
        alert(`Студенту ${Student.name} ${Student.surname} призначена стипендія`);
    }
}

