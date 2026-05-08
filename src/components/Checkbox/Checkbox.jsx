export const CheckBox = ({ checked, onChange, label, id, name }) => {
  const inputId = id ?? name ?? "checkbox";

  return (
    <label htmlFor={inputId}>
      <input
        id={inputId}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
