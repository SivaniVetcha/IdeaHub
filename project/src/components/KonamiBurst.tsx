import { useEffect,useState } from "react";
import Konami from "konami-code-js";
import Confetti from "react-confetti";

export default function KonamiBurst() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    new Konami(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    });
  }, []);

  return show ? <Confetti recycle={false} numberOfPieces={300} /> : null;
}
