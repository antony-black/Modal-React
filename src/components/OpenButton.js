export function OpenButton({ setVisibility }) {
  const handleOpenClick = () => setVisibility(true);

  return (
    <button onClick={handleOpenClick} className="open-modal-btn">
      ✨ OPEN Modal
    </button>
  );
}
