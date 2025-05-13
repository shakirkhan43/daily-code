

function WrongApi() {
  let data;

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((result) => {
        data = result; // ❌ Not updating UI (bad)
        console.log("Data:", data);
      });
  };

  return (
    <div>
      <h1>Wrong Way: Button Fetch</h1>
      <button onClick={getData}>Fetch Data</button>
    </div>
  );
}

export default WrongApi;
