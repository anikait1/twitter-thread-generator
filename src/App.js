import { useEffect, useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Tweet from "./Tweet";

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
    <>
      <Header />
      <Container>
        <Row className="my-5">
          <Col xs={12} md={7}> 
            <h4 className="text-center text-md-left mb-4 " style={{color: "#1da1f2"}}>
              Type your tweet and leave the rest to us
            </h4>
            <FormControl
              as="textarea"
              aria-label="Enter text"
              value={text}
              rows="5"
              placeholder="Text goes here"
              onChange={(event) => setText(event.currentTarget.value)}
              className="mb-3"
              style={{backgroundColor: "#15202b", color: "#ffffff"}}
            />
            <Button
              className="my-3 my-md-0"
              style={{ backgroundColor: "#1da1f2", borderColor: "#1da1f2" }}
              block
              onClick={() => setText((t) => t + "[...]")}
            >
              Split Tweet
            </Button>
          </Col>
          <Col xs={12} md={5}>
            <h4 className="text-center text-md-left my-4 mt-md-0" style={{color: "#1da1f2"}}>Tweets</h4>
            <Row>
              {tweets.map((tweet, index) => (
                <Col key={index} xs={12}>
                  <Tweet
                    length={tweet.length}
                    content={tweet}
                    number={index + 1}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
