import React from "react";

const SocialShare = ({ quote, author }) => {
  const shareOnTwitter = () => {
    const tweet = `"${quote}" - ${author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={shareOnTwitter} className="share-btn">Share on Twitter</button>
  );
};

export default SocialShare;
