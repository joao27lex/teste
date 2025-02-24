import dados from "../dados.json";
import Sidebar from "./Sidebar";

function About() {
    return (
        <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#1c1e22", color: "#f8f9fa" }}>
            <Sidebar />
            
            <div className="d-flex flex-column w-100 align-items-center" style={{ marginTop: "20px", fontFamily: "'Roboto', sans-serif" }}>
                <h1 className="text-center" style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "1px", marginBottom: "65px" }}>About João Pedro</h1>

                <Section title="Qualifications">
                    <Qualifications />
                </Section>

                <Section title="Professional Experience">
                    <Professional />
                </Section>

                <Section title="Languages">
                    <Languages />
                </Section>

                <Section title="Courses">
                    <Courses />
                </Section>

                <Section title="Extracurricular Activities">
                    <Extracurricular />
                </Section>
            </div>
        </div>
    );
}

export default About;

function Section({ title, children }) {
    return (
        <div className="w-100 d-flex flex-column align-items-center" style={{ marginBottom: "60px" }}>
            <h3 style={{ marginBottom: "20px", fontSize: "1.8rem", fontWeight: "600", letterSpacing: "0.5px" }}>{title}</h3>
            <hr style={{ backgroundColor: "#f8f9fa", width: "60px", height: "2px", marginBottom: "30px" }} />
            {children}
        </div>
    );
}

function Qualifications() {
    return (
        <div className="row" style={{ width: "90%" }}>
            {Object.keys(dados.qualifications).map((key) => {
                const item = dados.qualifications[key];
                return (
                    <div key={key} className="col-sm-6 col-md-4 d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center">
                            <img
                                src={item.icon_link}
                                alt={`${key} icon`}
                                style={{ width: '30px', height: '30px', marginRight: '10px' }}
                            />
                            <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>{key}</h4>
                        </div>
                        <p style={{ marginBottom: "50px", fontSize: "1rem", color: "#bbb" }}>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Professional() {
    return (
        <div className="row" style={{ width: "90%" }}>
            {Object.keys(dados.professional).map((key) => {
                const item = dados.professional[key];
                return (
                    <div key={key} className="col-12 d-flex flex-column align-items-start">
                        <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>{key}</h4>
                        <p style={{ marginBottom: "40px", fontSize: "1rem", color: "#bbb" }}>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Courses() {
    return (
        <div className="row" style={{ width: "90%" }}>
            {Object.keys(dados.courses).map((key) => {
                const item = dados.courses[key];
                return (
                    <div key={key} className="col-sm-6 col-md-4 d-flex flex-column align-items-start">
                        <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>{key}</h4>
                        <p style={{ marginBottom: "40px", fontSize: "1rem", color: "#bbb" }}>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Languages() {
    return (
        <div className="row" style={{ width: "90%" }}>
            {Object.keys(dados.languages).map((key) => {
                const item = dados.languages[key];
                return (
                    <div key={key} className="col-sm-6 col-md-4 d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center">
                            <img
                                src={item.icon_link}
                                alt={`${key} icon`}
                                style={{ width: '35px', height: '35px', marginRight: '10px' }}
                            />
                            <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>{key}</h4>
                        </div>
                        <p style={{ marginBottom: "50px", fontSize: "1rem", color: "#bbb" }}>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Extracurricular() {
    return (
        <div className="row" style={{ width: "90%" }}>
            {Object.keys(dados.extracurricular_activities).map((key) => {
                const item = dados.extracurricular_activities[key];
                return (
                    <div key={key} className="col-sm-6 col-md-4 d-flex flex-column align-items-start">
                        <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>{key}</h4>
                        <p style={{ marginBottom: "40px", fontSize: "1rem", color: "#bbb" }}>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}
