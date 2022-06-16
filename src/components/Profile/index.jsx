import React from "react";
import { useSelector } from "react-redux";
import AppStore from '../../stores/Redux/AppStore';
import './profile.scss'

const Profile = () => {

    let infoUser = useSelector((state) => state.user);
    infoUser = infoUser ? infoUser : AppStore.getState().state.user;
 
    
    return (
        <>
        
        <div className="profile-ctn">
        <h2>Mon profil</h2>
        <div className="information">
        <h4>prénom:</h4><br/>
        <h3>{infoUser.first_name} </h3><br/>
        <h4>nom:</h4><br/>
        <h3>{infoUser.last_name} </h3><br/> 
        <h4>email:</h4><br/>
        <h3>{infoUser.email}</h3><br/>
        <h4>tél:</h4><br/>
        <h3>{infoUser.phone}</h3><br/>
        <h4>adresse:</h4><br/>
        <h3>{infoUser.address}</h3><br/>
        <h4>code postal:</h4><br/>
        <h3>{infoUser.zipcode}</h3>
        </div>
        </div>
        </>
    )
    
}

export default Profile;
