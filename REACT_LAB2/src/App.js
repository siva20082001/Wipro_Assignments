import logo from './logo.svg';
import './App.css';
/*
C:\Users\Administrator>node -v
v14.21.3

C:\Users\Administrator>npm -v
6.14.13

C:\Users\Administrator>npm list --depth=0
C:\Users\Administrator
`-- express@4.18.2

npm ERR! extraneous: ms@2.1.3 C:\Users\Administrator\node_modules\send\node_modules\ms

C:\Users\Administrator>npm list -g --depth=0
C:\Users\Administrator\AppData\Roaming\npm
+-- @angular/cli@14.2.13
+-- create-react-app@5.1.0
+-- express@4.18.2
+-- express-generator@4.16.1
+-- json-server@0.17.4
+-- mongodb@6.3.0
+-- mongoose@8.0.3
+-- nodemon@3.1.10
`-- npm@6.14.13


C:\Users\Administrator>npx create-react-app wiproreactdemos2025
*/
//entry point
/*
*/
class Student {
  constructor(name, age) //local argument
  {
    this.n = name;  //n and a is a class variable 
    this.a = age;
  }
  display() {
    console.log("The Name of the student is: ", this.n)
    console.log("The Age of the student is: ", this.a)
  }
}//closing the class


class Car {
  constructor(name) {
    this.brand = name;//BRAND IS A CLASS VARIABLE
  }
  dis() {
    return 'I have a ' + this.brand;
  }
}
/*
Super() function is to call the constructor of the parent class.
 It is used when we need to access a few variables in the parent class.
*/
class Model extends Car {
  constructor(name, mod) {
    super(name);//calling the super class constructor
    this.model = mod;//derived class variable
  }
  show() {
    //this.dis() => parent class method
    return this.dis() + ', it is a ' + this.model
  }
}

//non arrow function
function sayHello() {
  window.alert('Hello!');
}


//ENTRY POINT
function App() {
  var i = 5;
  var stuObj = new Student('Devi', 20);
  let s1 = new Student("John", 21);  
  //const mycar = new Model("Hyundai", "Creta"); //valid
  var mycar = new Model("Hyundai", "Creta"); //valid

  return (
    
    <div className="App">
     <h1>Hello ReactJS-!! !</h1>
      <h1>{20 + 20}</h1>
      <h1>{i == 1 ? 'True!' : 'False!'}</h1>
{/*
     JSX COMMENT LINE!
  */}
 <h1>{stuObj.n}</h1>
      <h1>{stuObj.a}</h1>
      <h1>{stuObj.display()}</h1>
      <h1>{mycar.show()}</h1>
{/*
      <button onClick={sayHello}>Click me!</button>
      If you write onClick={sayHello()} with parentheses, it will call the function immediately when the component renders, instead of when clicked.
  */}


    </div>
  );
}

export default App;
