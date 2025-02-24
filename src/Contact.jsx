import Sidebar from "./Sidebar";
import dados from "../dados.json";

function Contact() {
    return (

        <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#1c1e22", color: "#f8f9fa" }}>
            <Sidebar />

            <div className="d-flex  justify-content-center align-items-center m-auto" style={{ width: "100%" }}>
                <div className="row justify-content-center" style={{ width: "90%"}}>
                    {Object.keys(dados.contact).map((key) => {
                        const item = dados.contact[key];
                        return (

                            <div key={key} className="col-4 d-flex justify-content-center">

                                <div className="card" style={{ 
                                    backgroundColor: "#2c2f33",
                                    border: "none", borderRadius: "10px", 
                                    minHeight: "150px", 
                                    width: "100%", 
                                    maxWidth: "300px", 
                                    marginBottom: "30px", 
                                    paddingTop: "10px" }}>

                                    <div className="card-body text-center">
                                        <h5 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#f8f9fa", marginBottom: "8%" }}>
                                            {key}
                                        </h5>

                                        <a href={item} target="_blank" className="btn btn-primary" style={{ backgroundColor: "#007bff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
                                            Acess
                                        </a>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>

        </div>

    );
}

export default Contact;
