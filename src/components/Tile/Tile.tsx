import React, { useEffect, useMemo, useRef, useState } from "react";

import colors from "tailwindcss/colors";

import { useAnswers } from "../../hooks/useAnswers";
import { useStorage } from "../../hooks/useStorage";
import Cell from "../Cell/Cell";

export type TileData = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
];

export default function Tile({
  title,
  data,
}: {
  title: string;
  data: TileData;
}) {
  const { setAnswers, getAnswers } = useStorage();
  const answer = useAnswers(title);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const [zoom, setZoom] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(
    getAnswers()[title]?.toLowerCase?.() === answer.toLowerCase()
  );
  const isMobile = useMemo(
    () => !window.matchMedia("(min-width: 600px)").matches,
    []
  );

  const zoomedStyle = useMemo(
    () =>
      zoom
        ? {
            transform: isMobile ? "scale(0.3)" : "",
          }
        : {},
    [isMobile, zoom]
  );

  useEffect(() => {
    if (!zoom) {
      setError(false);
    }
  }, [zoom]);

  const tileZoom = useMemo(() => {
    return zoom && ref.current
      ? {
          cursor: "auto",
          transform: `translate(${
            -ref.current.getBoundingClientRect().left +
            window.innerWidth / 2 -
            ref.current.getBoundingClientRect().width / 2
          }px, ${
            -ref.current.getBoundingClientRect().top +
            window.innerHeight / 2 -
            ref.current.getBoundingClientRect().height / 2
          }px) scale(7) rotate3d(1, 1, 1, 360deg)`,
          zIndex: 20,
          backgroundColor: colors.indigo[100],
          borderRadius: isMobile ? "2px" : "8px",
        }
      : {
          transform: "translate(0, 0) scale(1) rotate3d(0, 1, 0, 0deg",
          zIndex: 10,
        };
  }, [zoom, isMobile]);

  return (
    <div className="w-full h-full flex-auto flex items-center justify-center bg-white">
      {revealed && (
        <div className="h-full w-full grid grid-rows-4 grid-cols-4">
          {data.map((cell, index) => (
            <Cell value={cell} key={title + "-" + String(index)} />
          ))}
        </div>
      )}
      {zoom && (
        <div
          onClick={() => {
            setZoom(false);
          }}
          className="absolute top-0 bottom-0 left-0 right-0 z-[19]"
        ></div>
      )}
      {!revealed && (
        <div
          ref={ref}
          tabIndex={0}
          onClick={() => {
            window.scrollTo({ top: 0 });
            setZoom(true);
          }}
          className={
            "flex h-full w-full justify-center items-center hover:cursor-zoom-in bg-white hover:bg-primary-200 transition-[transform,background-color,z-index] duration-[500ms,200ms,300ms]"
          }
          style={tileZoom}
        >
          {zoom && (
            <form
              className="flex flex-col h-full items-center justify-center"
              onSubmit={(event) => {
                event.stopPropagation();
                event.preventDefault();

                if (btoa(value.toUpperCase()) === answer) {
                  setRevealed(true);
                  setZoom(false);
                  setAnswers(title, answer);
                } else {
                  setValue("");
                  setError(true);
                  document.querySelector("input")?.focus();
                }
              }}
              style={zoomedStyle}
            >
              <div className="mb-2 md:mb-4 select-none">{title}</div>
              <input
                onChange={(event) => {
                  setError(false);
                  setValue(event.target.value);
                }}
                value={value}
                autoFocus={zoom}
                style={error ? { outlineColor: "red" } : {}}
                maxLength={5}
                tabIndex={-1}
                className="w-[7ch] text-center px-2 py-1 mb-2 md:mb-4 rounded-md bg-white uppercase font-mono"
              />
              <button
                disabled={!value}
                type="submit"
                className="select-none bg-primary-400 text-white px-2 border border-indigo-700 rounded-lg disabled:bg-slate-200 disabled:border-slate-400 disabled:text-slate-400 focus:outline-4 uppercase"
              >
                Submit
              </button>
            </form>
          )}
          {zoom && (
            <div
              className="flex justify-center items-center bg-white rounded-full w-[10px] h-[10px] font-mono absolute -top-[2px] -right-[2px] md:top-[4px] md:right-[4px] text-[0.5rem] hover:text-primary-800 border-[1px] box-content border-primary-800 select-none cursor-pointer"
              style={zoomedStyle}
              onClick={(event) => {
                event.stopPropagation();
                setZoom(false);
              }}
            >
              <div className="w-full h-full text-center">x</div>
            </div>
          )}
          {!zoom && <div className="select-none">{title}</div>}
        </div>
      )}
    </div>
  );
}
