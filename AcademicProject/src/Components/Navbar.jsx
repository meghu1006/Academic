import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Tab from "./Tab";
import FileList from "./FileList";

const data = {
  notes: [
    { id: 1, title: "📘 Accounting Notes", file: "public/files/Basics-of-Accounting.pdf"},
    { id: 2, title: "📗 Economics Notes", file: "public/files/EconomicFundamentals.pdf"},
    { id: 3, title: "📕 Management organization and Control", file: "public/files/MangementOrganizationAndControl.pdf" },
    { id: 4, title: "📘 Corporate Finance Notes", file: "public/files/CORPORATE_FINANCE.pdf" },
    { id: 5, title: "📗 Marketing Management Notes", file: "public/files/MARKETING_MANAGEMENT.pdf" },
    { id: 6, title: "📙Basics of Forensic Accounting Notes", file: "public/files/Basics of Forensic Accounting Notes.pdf" },
    
  ],
  questions: [
    
    { id: 1, title: "📝 2022 Question Paper", file: "public/files/2022QuestionPaper.pdf" },
    { id: 2, title: "📝 2021 Question Paper", file: "public/files/2021QuestionPaper.pdf" },
    { id: 3, title: "📝 2019 Question Paper", file: "public/files/2019QuestionPaper.pdf" },
    { id: 4, title: "📝 2018 Question Paper", file: "public/files/2018Questionpaper.pdf" },
    { id: 5, title: "📝 Bcom question Bank", file: "public/files/BcomQuestionBank.pdf" },
    { id: 6, title: "📝 Accountency QuestionBank ", file: "public/files/AccountencyQuestionBank.pdf" },
  ],
  projects: [
    { id: 1, title: "💡 Marketing Project", file: "public/files/ProjectOnMarketingManagement.pdf" },
    { id: 2, title: "💡 Finance Project", file: "public/files/ProjectFinance.pdf" },
    { id: 3, title: "💡 Banking System Project", file: "public/files/ProjectBankingSystem.pdf" },
    { id: 4, title: "💡 Micro Project", file: "public/files/MicroProject.pdf" },
    
  ],
};

function Navbar() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("notes");

  const filtered = data[selected].filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white/60 backdrop-blur-lg p-10 rounded-3xl shadow-xl max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
         Bcom Resources
      </h2>

      <SearchBox value={search} onChange={setSearch} />
      

      <p className="text-center text-gray-700 mb-6">
        Search and download your notes, question papers, and projects 📂
      </p>

      <Tab selected={selected} setSelected={setSelected} />

      <FileList files={filtered} />
    </div>
  );
}
export default Navbar;