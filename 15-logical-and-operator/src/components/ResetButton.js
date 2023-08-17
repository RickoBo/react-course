function ResetButton({ count, resetCount, buttonStyle }) {
  return (
    count > 0 && (
      <div>
        <button onClick={resetCount} style={buttonStyle}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
