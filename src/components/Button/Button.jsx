export const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
