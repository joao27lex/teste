import Sidebar from "./Sidebar";
import dados from "../dados.json";

function Projects() {
    return (
        <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#1c1e22", color: "#f8f9fa" }}>
            <Sidebar />

            <div className="d-flex flex-column w-100 align-items-center" style={{ marginTop: "20px", fontFamily: "'Roboto', sans-serif" }}>
                <h1 className="mb-5 text-center" style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "1px" }}>Projects</h1>

                <Projects_Cards />
            </div>
        </div>
    );
}

export default Projects;

function Projects_Cards() {
    return (
        <div className="row justify-content-center" style={{ width: "90%" }}>
            {Object.keys(dados.portfolio).map((key) => {
                const item = dados.portfolio[key];
                return (

                    <div key={key} className="col-xl-6 col-lg-12 mb-4">

                        <div className="card" style={{ backgroundColor: "#2c2f33", border: "none", borderRadius: "10px", minHeight: "300px", }}>

                            <div className="card-body">

                                <h5 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#f8f9fa", marginBottom: "8%" }}>
                                    {item.project_name}
                                </h5>

                                <p className="card-text" style={{ fontSize: "1rem", color: "#bbb", marginBottom: "15%" }}>
                                    {item.tools}
                                </p>

                                <a href={item.link} target= "_blank" className="btn btn-primary" style={{ backgroundColor: "#007bff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
                                    Access
                                </a>

                            </div>

                        </div>

                    </div>
                );
            })}
        </div>
    );
}
