import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeUser  } from "@fortawesome/free-solid-svg-icons";

export const Profile =()=>{
    const [prof, setProf] = useState({
        name:'',
        email:'',
        university:'',
        course:'',
        year:'',
    });
    const [edit,setEdit] = useState(false);
    useEffect(()=>{
        const userProf = JSON.parse(localStorage.getItem('profile'));
        if(userProf){
            setProf(userProf)
        }
    },[]);
    const changeHandler =(data)=>{
        setProf({...prof,[data.target.name]:data.target.value})
    }
    const submitFun =(data)=>{
        data.preventDefault();
        localStorage.setItem('profile',JSON.stringify(prof));
        alert('Profile saved!');
        setEdit(false)
    }
    const editFun =()=> {
        setEdit(true);
    }
    return(
        <div>
            
            {edit ? (
            <form onSubmit={submitFun} className='profile-form'>
                <Link to='/' className='home-btn'><FontAwesomeIcon icon={faHomeUser} /></Link>
                <h1>~Create Your Profile~</h1>
               
                    <input type="text" name='name' value={prof.name}  onChange={changeHandler} placeholder='Full Name' />
                 
                    <input type="email" name='email' value={prof.email}  onChange={changeHandler} placeholder='Email Address' />
                 
                    <input type="text" name='university' value={prof.university}  onChange={changeHandler} placeholder='University' />
                 
                 
                    <input type="text" name='course' value={prof.course}  onChange={changeHandler} placeholder='Course Name' />
               
                
                    <input type="date" name='year' value={prof.year}  onChange={changeHandler} />
                
                <button type='submit'>Save</button>
            </form>
            ):(
                <div className='prof-info'>
                    <Link to='/' className='home-btn'><FontAwesomeIcon icon={faHomeUser} /> </Link>
                    <p>Name: <strong>{prof.name}</strong></p>
                    <p>Email: <strong>{prof.email}</strong></p>
                    <p>University: <strong>{prof.university}</strong></p>
                    <p>Course: <strong>{prof.course}</strong></p>
                    <p>Year: <strong>{prof.year}</strong></p>
                    <button onClick={editFun}>Edit</button>
                </div>
            )}
        </div>
    )
}