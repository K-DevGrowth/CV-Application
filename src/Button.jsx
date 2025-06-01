export default function Button({ title, handleClick }) {
    return (
      <>
        <button className="btn" onClick={handleClick}>
          {title}
        </button>
      </>
    );
  }