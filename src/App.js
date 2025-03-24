import Form from "./Components/examDetail/Form.jsx";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import LatestJobs from "./Components/pages/latest-jobs/LatestJobs.jsx";
import Main from "./Components/pages/Main.jsx";
import { Route, Routes } from "react-router-dom";
import Result from "./Components/pages/Result.jsx";
import AdmitCard from "./Components/pages/AdmitCard.jsx";
import AnswerKey from "./Components/pages/AnswerKey.jsx";
import Syllabus from "./Components/pages/Syllabus.jsx";
import ContactUs from "./Components/pages/ContactUs.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/latestjobs" element={<LatestJobs />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admitcard" element={<AdmitCard />} />
        <Route path="/answerkey" element={<AnswerKey />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/exam-detail" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
