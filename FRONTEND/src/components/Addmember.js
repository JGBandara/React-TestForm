import React, {useState} from 'react';
import './Addmember.css';
import axios from 'axios';


export default function Addmember(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [ContactNumber,setContactNumber] = useState("");
    const [RegNum,setRegNum] = useState("");
    
    function sendData(e){
    e.preventDefault();
     
     const newMember ={
         name,
         age,
         gender,
         ContactNumber,
         RegNum
     }
  axios.post("http://Localhost:1000/member/add",newMember).then(()=>{
         alert("Member Added")
    
         setName("");
         setAge("");
         setGender("");
         setContactNumber("");
         setRegNum("")
    
     }).catch((err)=>{
         alert(err)
     })
    
    }
    
    
    
    
    
        return(
            <div className="register">
                 <h3>Add New Member</h3>
                <form onSubmit={sendData}>
               
                <div className="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                         
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                    </div>
    
                     <div className="form-group">
                        <label for="age">Age</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter Your age"
                         
                        onChange={(e)=>{
                            setAge(e.target.value);
                        }}/>
                    </div>
    
                    <div className="form-group">
                        <label for="ContactNumber">Contact Number</label>
                        <input type="text" className="form-control" id="ContactNumber" placeholder="Enter Your contact number"
                         
                        onChange={(e)=>{
                            setContactNumber(e.target.value);
                        }}></input>
                    </div>
                  
    
                      <div className="form-group">
                        <label for="gender"> Gender</label>
                        <input type="text" className="form-control" id="gender" placeholder="Enter Your gender"
                         
                        onChange={(e)=>{
                            setGender(e.target.value);
                        }}/>
                    </div>
                      <div className="form-group">
                        <label for="RegNum">Registration Number</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter Your registration number"
                         
                        onChange={(e)=>{
                            setRegNum(e.target.value);
                        }}/>
                    </div><br/>
                <div className="butn"> 
                
                    <button type="submit" className="btn btn-primary" onSubmit={sendData} >Submit</button>
                    </div>
                    </form>
            </div>
        )
    }