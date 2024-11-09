import { useParams } from "react-router-dom";

function User(){

    const { id } = useParams();

    return (
        <div className=" p-5 text-center text-3xl text-green-700 bg-gray-200">
            User: {id}
        </div>
    );
}

export default User;