import React from "react";

export default function Cell({ value }: { value: boolean }) {
  return value ? <div className="bg-primary-900" /> : <div />;
}
