import React, { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [name, setName] = useState('');
  const prevName = useRef(' '); // pehle ka naam yahan store hoga

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input style={{ border:"1px solid black", borderRadius:"5px", padding:"5px", marginTop:"10px",  }} value={name} onChange={(e) => setName(e.target.value)} />
      <p>Current Name: {name}</p>
      <p>Previous Name: {prevName.current}</p>
    </div>
  );
}

export default PreviousValue;