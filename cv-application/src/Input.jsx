export default function Input({ items, disabled, val, handleInput }) {
  return (
    <>
      <label htmlFor={items.idFor}>{items.name}</label>
      <input
        type={items.type}
        disabled={disabled}
        onChange={handleInput}
        value={val}
        id={items.idFor}
      />
    </>
  );
}
