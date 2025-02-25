import { useEffect, useState } from "react";
import Counter from "./components/Counter";

const API_URL = "https://cookie-clicker-be.vercel.app";
const userId = "67be1bc2d7d6c0ace41cbe11";

function App() {
  const [clicks, setClicks] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setClicks(data.clicks);
        setBonusPoints(data.bonusPoints);
        setPrizes(data.prizes);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleClick = async () => {
    const response = await fetch(`${API_URL}/click/${userId}`, {
      method: "POST",
    });
    const data = await response.json();

    setClicks(data.clicks);
    setBonusPoints((prev) => prev + data.bonus);
    setPrizes((prev) => prev + data.prize);

    if (data.bonus) setMessage("🎉 You earned 10 bonus points!");
    else if (data.prize) setMessage("🏆 You won a prize!");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <>
      <Counter
        clicks={clicks}
        bonusPoints={bonusPoints}
        prizes={prizes}
        handleClick={handleClick}
        message={message}
      />
    </>
  );
}

export default App;
