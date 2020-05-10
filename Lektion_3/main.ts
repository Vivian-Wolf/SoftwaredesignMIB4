namespace Lektion_3 {
    let meinArray: number[] = [1, 2, 3];
    let einfacherString: string;
    einfacherString = meinArray.toString();
    console.log(meinArray);
    console.log(einfacherString);

    //To-String bei Klassen
    class Person {
        firstName: string;
        lastName: string;
        age: Date;
        momentanesAlter: number = this.alterserfassung();

        constructor(_firstName: string, _lastName: string, _dateOfBirth: Date) {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.age = _dateOfBirth;
        }

        toString(): string {
            let zusammenfassungDerPerson: string;
            zusammenfassungDerPerson = `Vorname: ${this.firstName}, Nachname: ${this.lastName}, Geburtstag: ${this.age}, Alter: ${this.momentanesAlter}`;
            return zusammenfassungDerPerson;
        }

        alterserfassung(): number {
            let personsAge: number;
            let acutalDate: Date = new Date();

            let birthdayYear: number = this.age.getFullYear();
            let todaysYear: number = acutalDate.getFullYear();

            let birthdayMonth: number = this.age.getMonth();
            let todaysMonth: number = acutalDate.getMonth();

            let birthdayDay: number = this.age.getDay();
            let todaysDay: number = acutalDate.getDay();

            personsAge = todaysYear - birthdayYear;

            if (birthdayMonth >= todaysMonth && birthdayDay <= todaysDay) {
                personsAge--;
            }

            return personsAge;
        }

    }

    let personArray: Person[];

    for (let i: number = 0; i < 5; i++) {
        let neuePerson: Person = new Person("Vorname" + i, "Nachname" + i, new Date(1995 + i, 02, 01));
        personArray.push(neuePerson);

        if (neuePerson.momentanesAlter > 20)
            console.log(neuePerson.toString());
    }

}