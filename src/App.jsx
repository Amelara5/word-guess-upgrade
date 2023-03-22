import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [route, setRoute] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer > 0 && route) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timer, route]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <header>Word guess game</header>
      <button
        className=" m-2 rounded-md bg-yellow-200 p-2"
        onClick={() => {
          setRoute(!route);
          console.log(route);
        }}
      >
        Start
      </button>
      <input
        className=" m-2 rounded-md"
        type="text"
        id="user-input"
        minLength={"2"}
        onBlur={(e) => {
          console.log(e.target.value);
          setUser(e.target.value);
        }}
        onChange={(e) => {
          const letter = e.target.value;
          if (letter !== "t") {
            setTimer((prev) => prev + 10);
          }
        }}
      />
      <div>{timer}</div>
      {route ? <div>GAME PAGE</div> : <div>HOME PAGE</div>}
    </div>
  );
}

// onChange={(e) => {
//   if (e.target.value !== "t") {
//     setTimer((prev) => prev + 10);
//   }
//   e.target.value = "";
// }}

// function App() {
//   const [gameOn, setGameOn] = useState(false);
//   const [buttons, setButtons] = useState([]);
//   const [periods, setPeriods] = useState(0);
//   const [timePerPeriod, setTimePerPeriod] = useState(1);

//   return (
//     <>
//       <h1 className="my-4 text-center text-3xl font-extrabold">
//         Scoreboard App
//       </h1>
//       <main
//         className="flex flex-col items-center gap-y-4
//       "
//       >
//         {gameOn ? (
//           <Display
//             buttons={buttons}
//             periods={periods}
//             timePerPeriod={timePerPeriod}
//           />
//         ) : (
//           <Setup
//             setButtons={setButtons}
//             setPeriods={setPeriods}
//             setTimePerPeriod={setTimePerPeriod}
//             setGameOn={setGameOn}
//           />
//         )}
//       </main>
//     </>
//   );
// }

export default App;
