import React, { useState } from "react";
import baseUrl from "./Axios";

function UploadFacts() {
  const [title, setTitle] = useState("");
  const [fact, setFact] = useState("");
  const [moreInfo, setMoreInfo] = useState("");

  function handleSubmit() {
    let uploadingStatus = document.getElementById("upload-status");

    async function saveFact(data) {
      const res = await baseUrl.post("post/fact", data);
      uploadingStatus.innerHTML = res.data;
    }

    let data = {
      title: title,
      fact: fact,
      moreInfo: moreInfo,
    };
    // console.log(data);

    saveFact(data);
  }

  return (
    <div className="add">
      <div className="add-form">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="fact">Fact: </label>
        <input
          type="text"
          id="fact"
          onChange={(e) => {
            setFact(e.target.value);
          }}
        />
        <br />
        <label htmlFor="more-info">More Info Link: </label>
        <input
          type="text"
          id="more-info"
          onChange={(e) => {
            setMoreInfo(e.target.value);
          }}
        />
        <br />
        <p className="fact-submit" onClick={handleSubmit}>
          Submit
        </p>
        <div id="upload-status">Uploading</div>
      </div>
    </div>
  );
}

export default UploadFacts;
