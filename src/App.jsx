import './App.css'
import {useEffect, useState} from "react";
import UserCard from "./components/UserCard.jsx";
import Form from "./components/Form.jsx";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const options = {
                headers: {
                    Accept: "application/vnd.github+jso",
                    Authorization: `Bearer ${import.meta.env.VITE_GIT_API_KEY}`
                },
                method: 'get'
            };
            await fetch('https://api.github.com/user', options)
                .then((response) => response.json())
                .then((json) => setUser(json));
        };

        getUser();
    }, [])

    return (
        <>
            <div className="mx-auto">
                <header>
                    {!!user && <UserCard avatar_url={user.avatar_url} name={user.name}/>}
                </header>
                <Form/>
            </div>
        </>
    )
}

export default App
