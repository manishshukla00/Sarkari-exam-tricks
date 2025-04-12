import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import LatestJobs from "./Components/pages/latest-jobs/LatestJobs.jsx";
import Main from "./Components/pages/Main.jsx";
import { Route, Routes } from "react-router-dom";
import Result from "./Components/pages/result/Result.jsx";
import AdmitCard from "./Components/pages/admit-card/AdmitCard.jsx";
import AnswerKey from "./Components/pages/answerKey/AnswerKey.jsx";
import Syllabus from "./Components/pages/syllabus/Syllabus.jsx";
import ContactUs from "./Components/pages/ContactUs.jsx";
import ResultForm from "./Components/pages/result/ResultForm.jsx";
import AdmitCardForm from "./Components/pages/admit-card/AdmitCardForm.jsx";
import LatestJobForm from "./Components/pages/latest-jobs/LatestJobForm.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/latestjobs" element={<LatestJobs />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/:title" element={<ResultForm />} />
        <Route path="/admitcard" element={<AdmitCard />} />
        <Route path="/admitCard/:title" element={<AdmitCardForm />} />
        <Route path="/answerkey" element={<AnswerKey />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/latestJob/:title" element={<LatestJobForm />} />
      </Routes>
    </>
  );
}

export default App;
