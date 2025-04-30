// function UserData(){
    
//     const user = [
//         {
//             id: 1,
//             name: 'Rahul',
            
//         },
//         {
//             id: 2,
//             name: 'Somil'
//         },
//         {
//             id: 3,
//             name: 'Aman'
//         },
//         {
//             id: 4,
//             name: 'Deepak'
//         }
//     ]


    

//     return(

//         <>
//         <div>
//             <ul>
//                 {
//                     user.map( (data , index) => {
//                         return <li key={index}>My value is : {data.id} and My name is :{data.name}</li>
//                     })
//                 }
//             </ul>
//         </div>
//         </>
//     )
// }

// export default UserData


const users = [
    { id: 1, name: 'Shakir', age: 24 },
    { id: 2, name: 'Somil', age: 22 }
  ];
  
  function UserData() {
    return (
      <div>
        <ul>
          {users.map(user => {
            return  <li key={user.id}>
                        {user.name} is {user.age} years old
                    </li>
            
  })}
        </ul>
      </div>
    );
  }
  
  export default UserData;
  