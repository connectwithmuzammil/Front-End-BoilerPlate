import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("");
  const changeTabs = (index) => {
    setActiveTab((prevTab) => (prevTab !== index ? index : ""));
  };
  const Faq = [
    {
      title: "Heading1",
      desc: "NFT in-game development refers to the process of creating NFTs working in gaming applications. The process can either be applied to an existing Web2 game or an NFT-based game built from scratch.",
    },
    {
      title: "Heading2",
      desc: "An NFT gaming platform allows players to earn in-game cryptocurrencies as they play the game. The application is powered by the active trading of NFTs and in-game coins that drive the game’s value.",
    },
    {
      title: "Heading3",
      desc: "Yes, it is profitable to create an NFT game if you have a great imaginative idea. To ensure your idea can yield profits, work with the best NFT game developers to bring your dream gaming platform to life.",
    },
  ];

  return (
    <section id="faq">
      <h1>FAQ</h1>
      <div className="faq-container">
        {Faq.map((faq, index) => (
          <div key={index} style={{ marginBlock: "15px" }}>
            <div className="title-container">
              <div className="title">{faq.title}</div>
              <button key={index} onClick={() => changeTabs(index)}>
                {activeTab === index ? <FaPlus /> : <FaMinus />}
              </button>
            </div>
            <div
              className={`faq-desc ${activeTab === index ? "faq-active" : ""}`}
            >
              {/* {activeTab === index ? <p>{faq.desc} </p> : ""} */}
              <p>{faq.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <p>Active Tab: {activeTab !== null ? tabs[activeTab] : "None"}</p> */}
    </section>
  );
};

export default FAQ;
