import "./Button.scss";

export const ButtonContainer = ({ position, children }) => {
  return (
    <div className="btnContainer" style={{ justifyContent: position }}>
      {children}
    </div>
  );
};

export const Button = ({ buttonText, buttonClass, onClick }) => {
  return (
    <button
      className={
        buttonClass === "primary" ? "btn btn--primary" : "btn btn--secondary"
      }
      onClick={() => {
        onClick();
      }}
    >
      {buttonText}
    </button>
  );
};
