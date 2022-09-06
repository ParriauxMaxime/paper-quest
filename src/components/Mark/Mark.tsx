import React from "react";

export default function Mark({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center font-bold">{title}</div>
  );
}
