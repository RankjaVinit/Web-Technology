import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

function Profile(){

    const { user } = useContext(UserContext);

    if( !user ) return <div> Please Login </div>

    return (
        <div>
            Username : {user.userName}
        </div>
    )
}

export default Profile;