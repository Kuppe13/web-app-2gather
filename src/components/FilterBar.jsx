import React from "react";
import "../HomePage.css";

export default function FilterBar({ options = [], active = null, onSelect }) {
  console.log("FilterBar render - options:", options);

  return (
    <nav className="filter-bar" aria-label="Event filters">
      {options.map((opt) => (
        <button
          key={opt.key}
          type="button"
          className={opt.key === active ? "filter-btn is-active" : "filter-btn"}
          onClick={() => onSelect(opt.key === active ? null : opt.key)}
        >
          {opt.label}
        </button>
      ))}
    </nav>
  );
}
