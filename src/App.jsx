import { useEffect, useState } from "react";

const WORD = "bird";

function App() {
  const [user, setUser] = useState("");
  const [route, setRoute] = useState(false);
  const [timer, setTimer] = useState(0);

  const [wordTest, setWordTest] = useState(["_", "_", "_", "_"]);

  useEffect(() => {
    const splitWord = WORD.split("");

    if (route && !(splitWord.toString() === wordTest.toString())) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 500);

      if (splitWord.toString() === wordTest.toString()) {
        console.log("Game finished");
      }

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timer, route, wordTest]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <header className="my-5 text-4xl font-black">Word guess game</header>
      <label htmlFor="user-input" className=" mt-2">
        Players name
      </label>
      <input
        className=" m-2 rounded-md"
        type="text"
        id="user-input"
        minLength={"2"}
        placeholder="Add name or initials"
        onBlur={(e) => {
          console.log(e.target.value);
          setUser(e.target.value);
        }}
      />
      <button
        className=" my-6 rounded-md bg-yellow-200 p-2"
        onClick={() => {
          setRoute(!route);
          console.log(route);
        }}
      >
        Start
      </button>

      <div className="text-4xl font-black">Player: {user}</div>
      <div className="text-8xl font-extrabold uppercase tracking-widest">
        {wordTest}
      </div>
      <div className=" my-10">
        <label htmlFor="guess">Guess a letter:</label>
        <input
          type="text"
          className="ml-1 w-8 rounded-md border-2 border-gray-300"
          maxLength={1}
          id="guess"
          onInput={(e) => {
            const letter = e.target.value;
            const splitWord = WORD.split("");

            if (splitWord.includes(letter)) {
              for (let i = 0; i < WORD.length; i++) {
                if (splitWord[i] === letter) {
                  setWordTest((prev) => {
                    const newValue = [...prev];
                    newValue.splice(i, 1, letter);
                    return newValue;
                  });
                }
              }
            } else {
              setTimer((prev) => prev + 10);
            }
            e.target.value = "";
          }}
        />
      </div>

      <div>{timer}</div>

      {/* {route ? (
        <div>GAME PAGE</div>
      ) : (
        <HomePage setUser={setUser} setRoute={setRoute} timer={timer} />
      )} */}
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

// function App() {
//   const [wordTest, setWordTest] = useState(["_", "_", "_", "_"]);

//   return (
//     <main className="flex h-screen flex-col items-center justify-center gap-y-8">
//       <h1 className="text-4xl font-black">Guess the Word</h1>
//       {/*
//       <WordHider word={WORD} letter={inputLetter} />
//       <div className="text-8xl font-extrabold uppercase tracking-widest">
//         {wordTest}
//       </div>
//       <div className="flex gap-x-2">
//         <label htmlFor="guess">Guess a letter:</label>
//         <input
//           type="text"
//           className="w-8 border-2 border-gray-300"
//           maxLength={1}
//           id="guess"
//           onInput={(e) => {
//             const letter = e.target.value;
//             const splitWord = WORD.split("");

//             if (splitWord.includes(letter)) {
//               for (let i = 0; i < WORD.length; i++) {
//                 if (splitWord[i] === letter) {
//                   console.log(i, "The index");
//                   setWordTest((prev) => {
//                     const newValue = [...prev];
//                     newValue.splice(i, 1, letter);
//                     console.log(newValue);
//                     return newValue;
//                   });
//                 }
//               }
//             }

//             // setInputLetter(() => letter);
//             e.target.value = "";
//           }}
//         />
//       </div>
//     </main>
//   );
// }

export default App;
