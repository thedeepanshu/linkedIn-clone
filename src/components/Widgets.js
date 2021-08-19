import React from "react";
import "../styles/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle(
        "Facebook engineers announce development of Time Cards",
        "A pair of Facebook engineers have announced the development of Time Cards—PCIe.😵"
      )}
      {newArticle(
        "High-performance detection tool for ReDoS-vulnerability",
        "Regular expressions (regexes) are widely used in different fields of computer science.😎"
      )}
      {newArticle(
        "How hackers can 'poison' open-source code",
        "Cornell Tech researchers have discovered a new type of online attack that can manipulate natural-language modeling systems.👾"
      )}
      {newArticle(
        "Teaching AI to see depth in photographs and paintings",
        "Researchers in SFU's Computational Photography Lab hope to give computers a visual advantage.🥵"
      )}
      {newArticle(
        "Javascript front-end framewroks and libraries",
        "If we talk about js libraries then no doubt React is getting more hype nowdays & if we talk about frameworks VUE is getting more attention because it is very easy to understand for beginners and intermidiates too.😃"
      )}
    </div>
  );
};

export default Widgets;
