import React, { useState, useEffect } from "react";
import { fetchQuote } from "../utils/fetchQuotes";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./../styles/QuoteBox.css";

const QuoteBox = () => {
  const [quotes, setQuotes] = useState([]); // Store history of quotes
  const [currentIndex, setCurrentIndex] = useState(-1); // Track current quote index

  useEffect(() => {
    getNewQuote(); // Load the first quote when the component mounts
  }, []);

  const getNewQuote = async () => {
    const newQuote = await fetchQuote();
    setQuotes((prevQuotes) => [...prevQuotes, newQuote]); // Store new quote
    setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the latest quote
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Go back to the previous quote
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Quote copied to clipboard! Now paste it in the post.");
    });
  };

  const shareOnSocial = (platform) => {
    if (quotes.length > 0 && currentIndex >= 0) {
      const quoteText = `"${quotes[currentIndex].text}" - ${quotes[currentIndex].author || "Unknown"}`;
      copyToClipboard(quoteText); // Copy text to clipboard

      let url = "";
      switch (platform) {
        case "twitter":
          url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
          break;
        case "facebook":
          url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quoteText)}`;
          break;
        case "linkedin":
          url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(quoteText)}`;
          break;
        default:
          break;
      }
      window.open(url, "_blank");
    }
  };

  return (
    <div className="quote-box">
      {quotes.length > 0 && currentIndex >= 0 && (
        <>
          <p className="quote">"{quotes[currentIndex].text}"</p>
          <h4 className="author">{quotes[currentIndex].author && `- ${quotes[currentIndex].author}`}</h4>

          {/* Arrow Button Container */}
          <div className="button-container">
            <button onClick={goBack} className="arrow-btn" disabled={currentIndex === 0}>←</button>
            <button onClick={getNewQuote} className="new-quote-btn">New Quote</button>
            <button onClick={getNewQuote} className="arrow-btn">→</button>
          </div>

          {/* Social Media Buttons */}
          <div className="social-buttons">
            <button className="social-btn twitter" onClick={() => shareOnSocial("twitter")}><FaTwitter /></button>
            <button className="social-btn facebook" onClick={() => shareOnSocial("facebook")}><FaFacebookF /></button>
            <button className="social-btn linkedin" onClick={() => shareOnSocial("linkedin")}><FaLinkedinIn /></button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteBox;
