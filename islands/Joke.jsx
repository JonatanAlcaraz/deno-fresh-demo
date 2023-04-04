import { useEffect, useState } from "preact/hooks";
import { handler } from "../routes/api/joke.js";
import { Button } from "../components/Button.jsx";
import { tw } from "twind"
export default function Joke() {
  const [jokeString, setJoke] = useState("");

  useEffect(() => {
    if (!jokeString.length) {
      console.log("useEffect");
      handler()
        .text()
        .then((body) => {
          console.log(body);
          setJoke(body);
        });
    }
  }, [jokeString]);
  return (
    <div class={"p-4 mx-auto max-w-screen-md"}>
      <p class={"my-6"}>{jokeString}</p>
      <Button onClick={() => setJoke("")}>Random Joke</Button>
    </div>
  );
}
