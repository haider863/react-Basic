const handleClick = (e) => {
  e.preventDefault();
  console.log("time::>>>>.", Date());
};
const handleEvent = (event) => {
  console.log(event.target.value);
};
const handleChange = (e) => {
  console.log("haider");
};

function EventReact() {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <h6>{Date()}</h6>
      <input
        id="search"
        type="text"
        onChange={handleEvent}
        placeholder="handleEvent"
      ></input>

      <button onClick={handleChange} placeholder="onChange">
        onclick
      </button>
    </>
  );
}
export default EventReact;
