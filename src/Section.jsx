import { useState } from "react";
import Button from "./Button";
import Form from "./Form";

export default function Section({ title, array, formData, setFormData }) {
  const [active, setActive] = useState(false);

  const handleAddEntry = () => {
    const newEntry = {};
    array.forEach((item) => {
      newEntry[item.idFor] = item.value;
    });
    setFormData([...formData, newEntry]);
  };

  return (
    <>
      <Button title={title} handleClick={() => setActive(!active)} />
      <div className="section">
        {active &&
          formData.map((entry, index) => (
            <Form
              key={index}
              array={array}
              formData={entry}
              setFormData={(newEntry) => {
                const updated = [...formData];
                updated[index] = newEntry;
                setFormData(updated);
              }}
            />
          ))}
        {active && title !== "Personal" && (
          <button className="btn smGrey" onClick={handleAddEntry}>
            + Add New
          </button>
        )}
      </div>
    </>
  );
}
