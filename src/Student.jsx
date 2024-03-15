
import profilePic from './assets/Retss.jpg'

function Student(){
    
        const students = [{id: 1, name: "Rhytz M. Archival", email: "rhytz.133@gmail.com"}, 
                    {id: 2, name: "Rhytz M. Archival", email: "rhytz.133@gmail.com"},
                    {id: 3, name: "Rhytz M. Archival", email: "rhytz.133@gmail.com"},
                    {id: 4, name: "Rhytz M. Archival", email: "rhytz.133@gmail.com"},
                    {id: 5, name: "Rhytz M. Archival", email: "rhytz.133@gmail.com"},];

    const listOfStudent = students.map(students => <li key={students.id}> 
                                        {students.name} &nbsp; {students.email}</li>);
    return(
        <>
            {students.map((student) => (
                <div className = "card">
                    <img src ={profilePic} alt="Profile Picure"></img>
                    <p>{student.name}</p>
                    <p>{student.email}</p>
                </div>
            ))}
        </>
       );
  
}

export default Student 