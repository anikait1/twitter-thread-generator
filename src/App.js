import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    let _tweets = [];
    let tweet = "";

    text
      .replaceAll("[...]", " [...] ")
      .split(" ")
      .filter((word) => word !== "")
      .forEach((word) => {
        if (word === "[...]") {
          _tweets.push(tweet.trim());
          tweet = "";
        } else {
          if (word.length + tweet.length > 280 && tweet !== "") {
            _tweets.push(tweet.trim());
            tweet = "";
          }

          tweet += " " + word;
        }
      });

    _tweets.push(tweet.trim());
    setTweets(_tweets);
  }, [text]);

  return (
    <div>
      <h4>{tweets.reduce((currLen, tweet) => currLen + tweet.length, 0)}</h4>
      <textarea
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <button onClick={() => setText((t) => t + "[...]")}>Split</button>
      <ol>
        {tweets.map((tweet) => (
          <li>{`${tweet.length}: ${tweet}`}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
