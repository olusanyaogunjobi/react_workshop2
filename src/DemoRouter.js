import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from 'react-router-dom';
import CrudDemo from './CrudDemo';
import axios from 'axios';

const baseURL ="http://localhost:8080/api/v1/person/";

const [personList, setpersonlist] = useState(initialData);


const DemoRouter = () => {
    return (
        <div className = "container">
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path = "/" component = {Welcome} />
                        <Route  path = "/home" component = {Home} />
                        <Route  path = "/person" component = {Person} />
                        <Route  path = "/about" component = {About} />
                        <Route  component = {NotFound} />
                        <Route  path = "/crud" component = {CrudDemo} />

                    </Switch>
            </Router>
        </div>
    );
};


const Header = ()=> {
    return(

       < Fragment>
       <br/>
             <ul className = "nav nav-pills nav-fill bg-dark text-white">
                    <li className = "nav-item ">
                        <Link className ="nav-link"  to = "/">Welcome</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/home">Home</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/person">Person</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/about">AboutPerson</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/crud">CrudDemo</Link>

                    </li>
                    
             </ul>
       
       </Fragment>

    );

};

const Welcome = () => {
    // useHistory allows developer access to the React Routers history object

    return (
        <Fragment>
            Welcome Page
            <br/>
           
        </Fragment>
    );
};

const Home = () => {
    return (
        <Fragment>
            Home Page
        </Fragment>
    );
};

const Person = () => {
    return (
        <Fragment>
            Person Page
        </Fragment>
    );
};

const About = () =>{

    return(
        <Fragment>

            About Person Page
        </Fragment>
    );
};

const NotFound = () => {
    return (
        <Fragment>
            Page Noy Found
        </Fragment>
    );
};

const CrudDemo = ()=>{

    const [person, setPerson] = useState();
    const [message,setMessage] = useState();
    const [error,setError] = useState();
    const [id,setId] = useState(0);

useEffect(()=>{

setPerson("Sanya");
//call API
const sendGetRequestById = async ()=> {

    console.log("start sendGetRequestById");
    let validation = true;
        if(id === 0){
            setError('Param is not valid!');
            validation = false;
}
if(validation){
    await axios.get(`${baseURL}${id}`).then(res => {
        console.log("RESPONSE", res);
        if(res.status === 200){
            setPerson(res.data);
            setMessage('Operation is Done!');
        } else {
            setMessage('API ERROR' + res.status);
        }

}).catch(err => {
    console.log("ERROR " , err);
    // update error state
    if(err.response){
        console.log("ERROR RESPONSE " , err.response);

        setError(err.response.data.statusText);
    } else {
        setError(err.message);
    }
    setMessage();
});
}

console.log("end sendGetRequestById");
}

const TableHeader = () =>{

    return (

        
        <thead>

            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
        </thead>
    );
};

const TableRow = (props)=> {

    return (
         <tbody>

             {
                props.list.map((student) => ( //what is the use of the list function, arrow function error
                    <tr key= {student.id}>

                        <td>{student.id }</td>
                        <td>{student.Name }</td>
                        <td>{student.Email }</td>
                        <td><TableAction person = {person}/></td>
                    </tr>

                    ))

            }
         </tbody>
    );
};

const TableAction = (props) => {
    const showData = () =>{

        setShowDetails(true);
        console.log("SHOW DATA", props.person);
        setPerson(props.person);
   
   };
   return (<button type ="button" classname ="btn btn-primary" onclick ={showData}>Details</button>);
};

const ShowsPersonDetails = ()=> {

    if(ShowsDetails){

        return(
            <div className= "card">
                <div className ="card-header bg-info text-white">
                <h5 className = "card-title">Person List</h5>
                <p className="card-text">ID: {person.id}</p>
                <p className = "card-text">Name:{person.Name}</p>
                <p className = "card-text">Email: {person.Email}</p>            
        
             </div>
             <div className="card-footer">

                <button type ="button" className ="btn btn-danger" onClick ={()=>{setShowDetails(false); setStudent(studentDefaultData)}}>Close</button>
            
            </div>
         </div>
        );
    }else{
        return("");
    }
};

return(
<div className = "container">

<table className ="table .table-striped">
    <TableHeader/>
    <TableRow list ={}/>
</table>
<br/>

<ShowsPersonDetails/>
</div>


);

});

}


export default DemoRouter;