import React from "react";
import "./Form.css";

const Form = ({ title, content, onTitleChange, onContentChange, onAddTab }) => {
  return (
    <section className="form-section">
      <input
        type="text"
        placeholder="탭 제목을 입력하세요"
        value={title}
        onChange={onTitleChange}
        className="form-input"
      />
      <br />
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={onContentChange}
        className="form-textarea"
      />
      <br />
      <button onClick={onAddTab} className="form-button">
        저장
      </button>
    </section>
  );
};

export default Form;
