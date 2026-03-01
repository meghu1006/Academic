import React, { useState } from "react";
import SearchNotes from "./SearchNotes";
import Tabs from "./Tabs";
import FileLists from "./FileLists";
const data = {
  notes: [
    {id:1,title:"C Programming Notes", file: "CProgramming_NEP_Syllabus.pdf" },
    {id:2,title:"DATA STRUCTURES USING C",file:"Data Structures Using C_NEP_Syllabus (1).pdf"},
    {id:3,title:"OBJECT ORIENTED CONCEPTS USING JAVA",file:""},
    {id:4,title:"DATABASE MANAGEMENT SYSTEMS",file:"DBMS_NEP (1) (1).pdf"},
    {id:5,title:"C# AND DOT NET FRAMEWORK",file:"CSharpandDotNetFramework22.pdf"},
    {id:6,title:"PYTHON PROGRAMMING",file:"Python_NEP_Notes.pdf"},
    {id:7,title:"COMPUTER MULTIMEDIA ANIMATION",file:""},
    {id:8,title:"DESIGN & ANALYSIS OF ALGORITHMS",file:"AcademicProject/public/BCANOTES/ADA.pdf.pdf"},
    {id:9,title:"STATISTICAL COMPUTING AND R PROGRAMMING",file:""},
    {id:10,title:"SOFTWARE ENGINEERING",file:""},
    {id:11,title:"CLOUD COMPUTING",file:""},
    {id:12,title:"Data Mining and Datawarehouse",file:" Mining and Datawarehouse.pdf"},
    {id:13,title:"PHP_NEP_Notes",file:"PHP_NEP_Notes.pdf"},
    {id:14,title:"Web Content Mangamengt  System,",file:"WebContentMangamengtSystem_NEP.pdf"}
  ],

  questions: [
    {id:1,title:"C Programming Notes  Question Paper", file: "" },
    {id:2,title:"DATA STRUCTURES USING C Question Paper",file:""},
    {id:3,title:"OBJECT ORIENTED CONCEPTS USING JAVA  Question Paper",file:""},
    {id:4,title:"DATABASE MANAGEMENT SYSTEMS  Question Paper",file:""},
    {id:5,title:"C# AND DOT NET FRAMEWORK  Question Paper",file:""},
    {id:6,title:"PYTHON PROGRAMMING  Question Paper",file:""},
    {id:7,title:"COMPUTER MULTIMEDIA ANIMATION  Question Paper",file:""},
    {id:8,title:"DESIGN & ANALYSIS OF ALGORITHMS  Question Paper",file:""},
    {id:9,title:"STATISTICAL COMPUTING AND R PROGRAMMING  Question Paper",file:""},
    {id:10,title:"SOFTWARE ENGINEERING  Question Paper",file:""},
    {id:11,title:"CLOUD COMPUTING  Question Paper",file:""},
    {id:12,title:"Data Mining and Datawarehouse  Question Paper",file:""},
    {id:13,title:"PHP_NEP_Notes Question Paper",file:""},
    {id:14,title:"Web Content Mangamengt System  Question Paper",file:""}
  ],

  labmanual: [
    {id:1,title:"C Programming Lab Manual", file: "" },
    {id:2,title:"DATA STRUCTURES USING C  Lab Manual",file:""},
    {id:3,title:"OBJECT ORIENTED CONCEPTS USING JAVA Lab Manual",file:""},
    {id:4,title:"DATABASE MANAGEMENT SYSTEMS  Lab Manual",file:""},
    {id:5,title:"C# AND DOT NET FRAMEWORK  Lab Manual",file:""},
    {id:6,title:"PYTHON PROGRAMMING  Lab Manual",file:""},
    {id:7,title:"COMPUTER MULTIMEDIA ANIMATION Lab Manual",file:"C:\Users\anilm\OneDrive\Desktop\Academic\AcademicProject\public\BCANOTES\Multimedia_and_Animation_Lab_Manual - Shortcut.lnk"},
    {id:8,title:"DESIGN & ANALYSIS OF ALGORITHMS  Lab Manual",file:""},
    {id:9,title:"STATISTICAL COMPUTING AND R PROGRAMMING  Lab Manual",file:""},
    {id:10,title:"PHP_NEP_Notes  Lab Manual",file:"PHP_NEP_Labmanual.pdf"}
  ],

  projects: [
    { id: 1, title: "", file: "" },
    { id: 2, title: "", file: "" }
  ]
};

function BCA() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("notes");

  const filtered = data[selected].filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-olive-300 backdrop-blur-lg p-10 rounded-3xl shadow-xl max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-center text-black mb-6">
        BCA Course Resources
      </h2>

      <SearchNotes value={search} onChange={setSearch} />

      <p className="text-center text-sky-200 mb-6">
        Search and download your notes, question papers, lab manuals, and projects 
      </p>

      <Tabs selected={selected} setSelected={setSelected} />

       <FileLists files={filtered} />

    </div>
  );
}

export default BCA;