import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,{
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2YyOTg0NjY2MjJjZDEyMzY0NzNlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDU5NTkyOSwiZXhwIjoxNjc1MDI3OTI5fQ.liA9uKKlOyNSTWAMiBVbjAt8Vbx2ezRudhjD6GGYJ6g"
                            }
                        }
                    );
                    setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);


    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            <List/>
            <List/>
        </div>

    )
}

export default Home;
