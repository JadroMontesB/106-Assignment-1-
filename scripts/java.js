function sayHello(){

    console.log("Hello, I'm Jadrukis bby");

    second();
}

function second(){

    console.log("Testing :(");
}

function helloStranger(name){

    console.log("Hello " + name)
}

function sum(number1, number2){

    let sum = number1 + number2;
    return sum;
    
}

function printNameInCaps(array) {
    console.log(`there are ${array.length} students`);
  
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].toUpperCase());
    }
  }

  function sumArray(){

    let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234,123897];
    let total = 0;

    for(let i = 0; i <numbers.length; i++)
    {
        let num = numbers[i];
        total = total + num;

    }

    console.log("The total is:" + total);


    //part 2
    let count = 0;
    let another = 0;
    for(let i = 0; i <numbers.length; i++)
    {
        let num = numbers[i];
        if (num <= 1000)
        {
            count ++;
            
            another += num;
        }

    }
    console.log("there are:" + count + " numbers < 1000")
    console.log("The sum total is " + another);

}

function exc1(){

    let example = 20;

    for(let i = 0; i <= example; i++)
    {
        if(i == 7 || i == 11)
        {
           
        }
        else
        {
            console.log("Number: " + i);
        }
       
       
    }
}


function init(){

    console.log("Welcome Page");

    helloStranger("Homer");
    sayHello();
    
    let suma = sum(21,21);
    console.log(suma);

    let students = [];
    students.push("Brett");
    students.push("Miles");
    students.push("Kyle");
    students.push("Kyle");
    students.push("Jadro");
    students.push("Ray");
    students.push("Jasmine");
    students.push("Jazmin");

    printNameInCaps(students);
    sumArray();

    exc1();
    

}


window.onload = init;