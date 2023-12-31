import { useState } from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List() {
  const [darkTheme, setDarkTheme] = useState(false);
  const Theme = {
    backgroundColor: darkTheme ? `#333` : `#444`,
    color: darkTheme ? `#FFF` : `#333`,
  };
  return (
    <div style={Theme}>
      <button onClick={() => setDarkTheme((dark) => !dark)}>
        Theme change
      </button>
      {list.map(function (item) {
        return (
          <>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default List;
