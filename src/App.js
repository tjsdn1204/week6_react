import React, { useState } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [tabs, setTabs] = useState(["create", "HTML", "CSS", "JS", "React"]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddTab = () => {
    if (title.trim() !== "" && !tabs.includes(title)) {
      setTabs([...tabs, title]);
      setTitle("");
      setContent("");
    }
  };

  const handleDeleteTab = (tabToDelete) => {
    setTabs(tabs.filter((tab) => tab !== tabToDelete));
  };

  return (
    <div>
      <Header />
      <NavBar tabs={tabs} onDelete={handleDeleteTab} />
      <Form
        title={title}
        content={content}
        onTitleChange={(e) => setTitle(e.target.value)}
        onContentChange={(e) => setContent(e.target.value)}
        onAddTab={handleAddTab}
      />
    </div>
  );
}

export default App;

