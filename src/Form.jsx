import { useState } from "react";
import Input from "./Input";

export default function Form({ array, formData, setFormData }) {
  const [status, setStatus] = useState(true);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {array.map((items) => (
          <Input
            val={formData[items.idFor] || ""}
            handleInput={handleInputChange}
            key={items.key}
            items={items}
            disabled={status}
          />
        ))}
        <button className="btn smGrey" onClick={() => setStatus(false)}>
          Edit
        </button>
        <button
          className="btn smGrey"
          onClick={() => setStatus(true)}
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}
