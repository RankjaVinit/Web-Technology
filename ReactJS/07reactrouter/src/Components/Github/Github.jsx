import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect( () => {
    //     fetch('https://api.github.com/users/RankjaVinit')
    //     .then(response => response.json())
    //     .then((response) => {
    //         setData(response);
    //     })
    // }, [])


    return (
        <div className=" p-5 text-center text-3xl text-green-700 bg-gray-200">
            Github Followers: { data.followers }
            <img src={`${data.avatar_url}`} alt="Avatar" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RankjaVinit');
    return response.json();
}