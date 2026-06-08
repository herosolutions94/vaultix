export default function ProgressBar({ value = 0 }) {
  return (
    <div className="progressWrapper">
    <span className="progressText">{value}%</span>
      <div className="progressTrack">
        <div
          className="progressFill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}