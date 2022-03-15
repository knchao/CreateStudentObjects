class Student{
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name: string, age: number, gender: string, nationality: string) {
     this.name = name;
     this.age = age;
     this.gender = "female";
     this.nationality = nationality;
    }

    getNationality(){
        console.log(`The nationality of the student is ${this.nationality}.`)
    }
}

class UnderGraduate extends Student implements Iundergrad{
    batch: number;
    GPA: number;

    constructor(name: string, age: number, gender: string, nationality: string, batch: number, GPA: number ) {
        super(name, age, gender, nationality);
        this.batch = batch;
        this.GPA = GPA;
    }
}

interface Iundergrad{
    name: string,
    age: number,
    gender: string,
    nationality: string,
    batch: number,
    GPA: number    
}

let newUnderGrad = new UnderGraduate("Charlie Zimmerman", 20, "Male", "Canadian", 4, 3.5);

newUnderGrad.getNationality();
