import React from 'react';
import Sidebar from './Sidebar';
import dados from '../dados.json';
import img from '../foto_noite.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='d-flex' style={{ minHeight: "100vh", backgroundColor: "#1c1e22" }}>
            <Sidebar />

            <div className='d-flex  w-100 align-items-center' style={{ gap: "10%", paddingLeft: "8%" }}>
                <div 
                    className='d-flex flex-column justify-content-center text-center text-md-left mb-4 mb-md-0 w-100' 
                    style={{
                        color: "#f8f9fa",
                        flexBasis: "40%",
                        paddingRight: "10px"
                    }}>
                        
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
                        Hey, I'm João Pedro.
                    </h1>

                    <div style={{ fontSize: "1.2rem", lineHeight: "1.5rem", marginBottom: "2rem", textAlign: "justify"}}>
                        A {dados.data.age} {dados.education} from São Paulo, Brazil. {dados.professional_goal}.
                    </div>

                    <Link to="/projects"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#3a86ff",
                            color: "#fff",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            marginTop: "1rem",
                            textDecoration: "None"
                        }}
                    >
                        My Projects
                    </Link>
                </div>
                <div className='d-flex justify-content-center w-100' style={{ flexBasis: "35%" }}>
                    <img
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            borderRadius: "10px",
                            border: "10px solid black"
                        }}
                        src={img}
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
