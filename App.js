import "./App.css";
import List from "./Component1";
import AerrowFunction from "./component2";
import Board from "./component3";
const handleClick = (e) => {
  e.preventDefault();
  console.log("time::>>>>.", Date());
};
function AeroFunction() {
  console.log("AeroFunction");
}

const title = "react";

const welcome = {
  greeting: "welcome",
  title: "react",
};

function getTitle(props) {
  return props;
}
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
const handleEvent = (event) => {
  console.log(event.target.value);
};
const handleChange = (e) => {
  console.log("haider");
};

const number = [3211, 122, 312, 212,143];
const multiPlie=number.map((num)=> num*2)
const array1=[1,21];
const array1Item1=array1[0];
const array1Item2=array1[1];
const [firtsArray1Item,secArray1]=array1;



function App() {
  return (
    <div className="App">
      <>
        <button onClick={handleClick}>Click me</button> {/*  */}
        <button onClick={() => AeroFunction()}>AeroFunction</button>
        <h6>{Date()}</h6>
        <p>hello {title}</p>
        <lable htmlFor="search">search:</lable>
        <input id="search" type="text"></input>
        <h3>{welcome.greeting}</h3>
        <h4>{welcome.title}</h4>
        <h1>hello{getTitle(" world")}</h1>
        {list.map((item) => {
          {
            /* Using the map function to iterate over the list array and display elements */
          }
          return (
            <>
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>{" "}
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                {/* function declaration function(){...} */}
                {/* Aero function declaration const () => {...} const item => { ... } const (item) => { ... } const (item, index) => { ... }*/}
              </div>
            </>
          );
        })}
        <List />
        {/* <AerrowFunction /> */}
        {/* <AerrowFunction name="ali"> */}
        {/* <span>||||this is h6 element</span> */}
        {/* <p>this is para||||</p> */}
        {/* </AerrowFunction> */}
        <input
          id="search"
          type="text"
          onChange={handleEvent}
          placeholder="handleEvent"
        ></input>
        <button onClick={handleChange} placeholder="onChange">
          onclick
        </button>
        {number.map((num) => {
          return <p>{num*2}</p>;
        })}
        <div>{multiPlie}</div>
        <p>{array1}</p>
        <p>{array1Item1}</p>
        <p>{array1Item2}</p>
        <p>{firtsArray1Item}</p>
        <p>{secArray1}</p>



        <Board />
      </>
    </div>
  );
}

export default App;
