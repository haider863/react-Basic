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
function ListArray() {
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>{" "}
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
            </div>
          </>
        );
      })}
    </>
  );
}
export default ListArray;
