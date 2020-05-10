"use strict";
var Lektion_3;
(function (Lektion_3) {
    let meinArray = [1, 2, 3];
    let einfacherString;
    einfacherString = meinArray.toString();
    console.log(meinArray);
    console.log(einfacherString);
    //To-String bei Klassen
    class Person {
        constructor(_firstName, _lastName, _dateOfBirth) {
            this.momentanesAlter = this.alterserfassung();
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.age = _dateOfBirth;
        }
        toString() {
            let zusammenfassungDerPerson;
            zusammenfassungDerPerson = `Vorname: ${this.firstName}, Nachname: ${this.lastName}, Geburtstag: ${this.age}, Alter: ${momentanesAlter}`;
            return zusammenfassungDerPerson;
        }
        alterserfassung() {
            let personsAge;
            let acutalDate = new Date();
            let birthdayYear = this.age.getFullYear();
            let todaysYear = acutalDate.getFullYear();
            let birthdayMonth = this.age.getMonth();
            let todaysMonth = acutalDate.getMonth();
            let birthdayDay = this.age.getDay();
            let todaysDay = acutalDate.getDay();
            personsAge = todaysYear - birthdayYear;
            if (birthdayMonth >= todaysMonth && birthdayDay <= todaysDay) {
                personsAge--;
            }
            return personsAge;
        }
    }
    let personArray;
    for (let i = 0; i < 5; i++) {
        let neuePerson = new Person("Vorname" + i, "Nachname" + i, new Date(1995 + i, 02, 01));
        personArray.push(neuePerson);
        if (neuePerson.momentanesAlter > 20)
            console.log(neuePerson.toString());
    }
})(Lektion_3 || (Lektion_3 = {}));
//# sourceMappingURL=main.js.map