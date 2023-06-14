const title = "react";
const welcome = {
  greeting: "welcome",
  title: "react",
};

function SimpleFunction() {
  return (
    <>
      <p>hello {title}</p>
      <h3>{welcome.greeting}</h3>
      <h4>{welcome.title}</h4>
    </>
  );
}
export default SimpleFunction
