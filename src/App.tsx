import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Cell from "./components/Cell/Cell";
import Mark from "./components/Mark/Mark";
import Tile from "./components/Tile/Tile";
import { useData } from "./hooks/useData";
import { COLUMNS, ROWS } from "./utils/constants";

const titleFromIndex = (index: number) => {
  const letter = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""][index % 10];
  const number = ["", "1", "2", "3", "4", "5", "6", "7", "8", ""][
    Math.floor(index / 10)
  ];

  return letter + number;
};

const MemoTile = React.memo(Tile, () => true);

function App() {
  const [gap, setGap] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const tiles = new Array((COLUMNS + 2) * (ROWS + 2)).fill(0);
  const cells = useData();
  const lastColumn = cells.map((row) => row[row.length - 1]).flat();
  const lastRow = cells[cells.length - 1];
  const [surprise, setSurprise] = useState(false);
  const [superHot, setSuperHot] = useState(false);
  const gameOver =
    btoa(document.location.search) === "P3E9aWxvdmV5b3Vmb3JldmVy";
  const interval = useRef<NodeJS.Timer>();

  const isMobile = useMemo(
    () => !window.matchMedia("(min-width: 600px)").matches,
    []
  );

  useLayoutEffect(() => {
    if (gameOver) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      interval.current = setInterval(() => setSuperHot(!superHot), 1000);
      return () => clearInterval(interval.current);
    }
  }, [gameOver, superHot]);

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => setSurprise(true), 0);
    }
  }, [gameOver]);

  useEffect(() => {
    const handler = () => {
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  if (gameOver) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-xl">
          <span
            className="transition-all font-bold text-red-800"
            style={{ opacity: superHot ? 0 : 1 }}
          >
            SUPER
          </span>
          <span
            className="transition-all font-bold text-red-800"
            style={{ opacity: !superHot ? 0 : 1 }}
          >
            HOT
          </span>
          <br />
          GG BB ❤️
        </h1>
        <form
          className="mt-4 flex flex-col justify-center items-center transition-all duration-700"
          style={{ opacity: !surprise ? 0 : 1 }}
          onSubmit={(event) => {
            event.preventDefault();
            if (value.toLowerCase() === "bivalves".toLowerCase()) {
              setValue("❤️❤️❤️❤️❤️❤️");
              setTimeout(() => {
                document.location.assign(
                  isMobile
                    ? "vnd.youtube://dQw4w9WgXcQ"
                    : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                );
              }, 0);
            } else {
              setValue("");
              setError(true);
            }
          }}
        >
          <label htmlFor="answer">JTM 00000100</label>
          <input
            autoFocus
            name="answer"
            value={value}
            onFocus={() => setError(false)}
            onChange={(event) => {
              setError(false);
              setValue(event.target.value);
            }}
            className="w-[10ch] border text-center px-2 py-1 mb-2 md:mb-4 rounded-md bg-white uppercase font-mono"
            style={error ? { outlineColor: "red" } : {}}
            maxLength={8}
          ></input>
          <button
            type="submit"
            disabled={!surprise || !value}
            className="transition-all select-none text-xl m-2 bg-primary-400 text-white px-4 border border-indigo-700 rounded-lg disabled:bg-slate-200 disabled:border-slate-400 disabled:text-slate-400 focus:outline-4 uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="left-0 top-0 h-full w-full z-10 flex flex-col justify-center items-center bg-primary-300">
      <h1 className="text-3xl mt-2 pb-8">Paper Quest</h1>
      <div
        className="p-2 w-[100vw] h-[100vw] md:h-[100vh] md:w-[100vh] grid grid-cols-[1rem_repeat(8,_minmax(0,_1fr))_0.25fr] grid-rows-[1rem_repeat(8,_minmax(0,_1fr))_0.25fr] bg-primary-100"
        style={{
          ...(gap
            ? {
                gridGap: "0.5rem",
              }
            : {}),
        }}
      >
        {tiles.map((_, index) => {
          if (index === 90 || index === 9) {
            return <div key={index} className="w-full" />;
          }

          if (index === 99) {
            return (
              <div key={String(index)} className="w-full grid grid-cols-1">
                {lastRow
                  .slice(((index % 10) - 1) * 4, (index % 10) * 4)
                  .map((cell, i) => (
                    <Cell
                      key={"cell-" + String(index) + "-" + String(i)}
                      value={cell}
                    />
                  ))}
              </div>
            );
          }

          if (index >= 91) {
            return (
              <div key={String(index)} className="w-full grid grid-cols-4">
                {lastRow
                  .slice(((index % 10) - 1) * 4, (index % 10) * 4)
                  .map((cell, i) => (
                    <Cell
                      key={"cell-" + String(index) + "-" + String(i)}
                      value={cell}
                    />
                  ))}
              </div>
            );
          }

          if (index % 10 === 9) {
            return (
              <div
                key={String(index)}
                className="w-full grid grid-rows-4 grid-flow-col"
              >
                {lastColumn
                  .slice(
                    (Math.floor(index / 10) - 1) * 4,
                    Math.floor(index / 10) * 4
                  )
                  .map((cell, i) => (
                    <Cell
                      key={"cell-" + String(index) + "-" + String(i)}
                      value={cell}
                    />
                  ))}
              </div>
            );
          }

          if (index <= 9 || index % 10 === 0)
            return <Mark key={String(index)} title={titleFromIndex(index)} />;

          return (
            <MemoTile
              key={String(index)}
              title={titleFromIndex(index)}
              data={new Array(4)
                .fill(0)
                .reduce(
                  (acc, _, i) => [
                    ...acc,
                    ...cells[(Math.floor(index / 10) - 1) * 4 + i].slice(
                      ((index % 10) - 1) * 4,
                      (index % 10) * 4
                    ),
                  ],
                  []
                )}
            />
          );
        })}
      </div>
      <div
        className="flex justify-center items-center w-20 md:my-4 my-2 cursor-pointer"
        onClick={() => setGap(!gap)}
      >
        <input
          className="h-8 w-8 md:m-2 m-1 cursor-pointer"
          name="gap"
          type="checkbox"
          readOnly
          checked={gap}
        />
        <label
          className="text-xl ml-2 cursor-pointer select-none"
          htmlFor="gap"
        >
          Gap
        </label>
      </div>
    </div>
  );
}

export default App;
