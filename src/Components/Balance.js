function Balance(probs) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{probs.total}</b>
      </div>
    </div>
  );
}

export default Balance;
