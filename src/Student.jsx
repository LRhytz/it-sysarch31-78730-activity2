
function Student(){

    const Course="BSIT";
    const FName="Archival";
    const LName="Rhytz";

    return(
        <ul>
        <li>{Course}</li>
        <li>{FName}</li>
        <li>{LName.toUpperCase()}</li>
        </ul>
    );
}

export default Student 