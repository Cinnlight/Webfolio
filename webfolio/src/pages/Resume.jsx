import MyResume from "../assets/HaileyResume2025.pdf";

function Resume() {
    return (
        <div className="resume-container mx-auto mt-5 mb-5">
             <iframe src={MyResume} title="Hailey Resume 2025" width="100%" height="800px" style={{ border: 'none' }} ></iframe>
        </div>
    );
}

export default Resume;