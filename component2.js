const arr = [
  {
    point: 1,
    paras: "this is forst para",
    title: "first para",
    mainId: 1,
  },
  {
    point: 2,
    paras: "this is sec para",
    title: "sec para",
    mainId: 2,
  },
];

const AerrowFunction = (props) => {
  console.log(props);
  return (
    <>
      <span>hello {props.name} </span>
      <span>{props.children}</span>
      <div>
        {arr.map(function (item) {
          return (
            <>
              <div>{item.paras}</div>

              {/* <div>{item.mainId}</div> */}
            </>
          );
        })}
      </div>
    </>
  );
};
export default AerrowFunction;
