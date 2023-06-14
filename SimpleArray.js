const number = [3211, 122, 312, 212, 143];
const multiPlie = number.map((num) => num * 2);
const array1 = [1, 21];
const array1Item1 = array1[0];
const array1Item2 = array1[1];
const [firtsArray1Item, secArray1] = array1;

function SimpleArray() {
  return (
    <>
      {number.map((num) => {
        return <p>{num * 2}</p>;
      })}
      <div>{multiPlie}</div>
      <p>{array1}</p>
      <p>{array1Item1}</p>
      <p>{array1Item2}</p>
      <p>{firtsArray1Item}</p>
      <p>{secArray1}</p>
    </>
  );
}
export default SimpleArray