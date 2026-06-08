import { useState, useRef, useEffect } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

export default function DatePicker({ value, onChange, placeholder = "mm/dd/yyyy" }) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const wrapRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const selectDay = (day) => {
    const picked = new Date(viewYear, viewMonth, day);
    const formatted = picked.toLocaleDateString("en-US", {
      month: "2-digit", day: "2-digit", year: "numeric",
    });
    onChange(formatted);
    setOpen(false);
  };

  const isSelected = (day) => {
    if (!value) return false;
    const d = new Date(value);
    return (
      d.getFullYear() === viewYear &&
      d.getMonth() === viewMonth &&
      d.getDate() === day
    );
  };

  const isToday = (day) => {
    return (
      today.getFullYear() === viewYear &&
      today.getMonth() === viewMonth &&
      today.getDate() === day
    );
  };

  // build grid cells (empty + day numbers)
  const cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="dp-wrap" ref={wrapRef}>
      {/* trigger */}
      <div
        className={`input dp-trigger ${open ? "dp-trigger--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? "dp-value" : "dp-placeholder"}>
          {value || placeholder}
        </span>
        <svg
          className="dp-caret"
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* calendar dropdown */}
      {open && (
        <div className="dp-dropdown">
          {/* header */}
          <div className="dp-header">
            <button type="button" className="dp-nav-btn" onClick={prevMonth}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="dp-month-label">
              {MONTHS[viewMonth]} {viewYear}
            </span>

            <button type="button" className="dp-nav-btn" onClick={nextMonth}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* day-of-week row */}
          <div className="dp-grid">
            {DAYS.map((d) => (
              <div key={d} className="dp-day-name">{d}</div>
            ))}

            {cells.map((day, i) =>
              day === null ? (
                <div key={`e-${i}`} />
              ) : (
                <button
                  key={day}
                  type="button"
                  className={[
                    "dp-day",
                    isSelected(day) ? "dp-day--selected" : "",
                    isToday(day) && !isSelected(day) ? "dp-day--today" : "",
                  ].join(" ")}
                  onClick={() => selectDay(day)}
                >
                  {day}
                </button>
              )
            )}
          </div>

          {/* today shortcut */}
          <div className="dp-footer">
            <button
              type="button"
              className="dp-today-btn"
              onClick={() => {
                setViewYear(today.getFullYear());
                setViewMonth(today.getMonth());
                selectDay(today.getDate());
              }}
            >
              Today
            </button>
            <button
              type="button"
              className="dp-clear-btn"
              onClick={() => { onChange(""); setOpen(false); }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
