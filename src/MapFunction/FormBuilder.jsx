
function FormBuilder() {
const fields = ['Name', 'Email', 'Phone'];

  return (
    <form>
      {fields.map((label, i) => (
        <div key={i}>
          <label>{label}:</label>
          <input type="text" placeholder={`Enter ${label}`} />
          <input type="text" placeholder={`Enter ${label}`} />
        </div>
      ))}
    </form>
  );
}

export default FormBuilder;


// Dynamic forms banane ke liye bhi map() bohot useful hota hai.