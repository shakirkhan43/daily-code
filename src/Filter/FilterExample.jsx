import React from 'react';

const FilterExample = () => {
  const users = [
    { id: 1, name: 'Azman', age: 24 },
    { id: 2, name: 'Jane', age: 17 },
    { id: 3, name: 'Bob', age: 19 }
  ];

  // const adultUsers = users.filter(user => user.age > 18);
  const adultUsers = users.filter(( user ) => {
    return user.age >= 20
  });

  return (
    <div>
      <h2 className='text-center mt-5'>Adult Users</h2>
      <ul className='text-center'>
        {adultUsers.map(mapuser => (
          <li key={mapuser.id}>{mapuser.name} - {mapuser.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExample;



