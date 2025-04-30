
  
  function StyledUserList() {
    const users = [
        { id: 1, name: 'Shakir', age: 24 },
        { id: 2, name: 'Rahul', age: 15 }
      ];
    return (
      <div>
        {users.map(user => (
          <div key={user.id} style={{ color: user.age >= 18 ? 'green' : 'red' }}>
            {user.name} - {user.age} yrs
          </div>
        ))}
      </div>
    );
  }
  
  export default StyledUserList;
  