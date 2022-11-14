// function madeBy() {
//     alert("Hello! My name is (Brogan)!!");
//     };

// object
// const person = {
//     name: "Brogan"
//     surname: "Gys"
// };
// console.log(person.name);
// console.log(person['surname']);
// person.email = "lindo@gmail.com";
// console.log(person);


// Factory function
// is a function that returns an object,
// there is no need to use a new keyword when attempting to
// create an instance from a function.

// example
function userDetails(firstName, surname) {
    return {
        firstName: firstName,
        surname: surname,
        display: function() {
            console.log(`Name: ${firstName}\nSurname: ${surname}`);
        }
    }
}

// Create an instance
let person1 = userDetails('Brogy', 'Gys');
person1.firstName = "Hokage";
person1.display();
console.log("===================================");
const person2 = userDetails('Oslin', 'Johnson');
person2.display();


// if instance is created no need for keyword







    // Array 
    // function evenData (data) {
    //     for (let i in data){
    //         if(i % 2 ==0)
    //     console.log(data[i]);
    //     }
    // };
    
    // let data = [8, 9, 6, 12, 'Joel'];
    // evenData(data);
    