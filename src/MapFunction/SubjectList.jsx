
  
  function SubjectList() {
    const subjects = [
        {
          name: 'Math',
          topics: ['Algebra', 'Geometry' , "Maths"]
        },
        {
          name: 'Science',
          topics: ['Physics', 'Chemistry']
        }
      ];
    return (
      <div>
        {subjects.map((subject, index) => (
          <div key={index}>
            <h3>{subject.name}</h3>
            <ul>
              {subject.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default SubjectList;