import "./Form.scss";

export const Form = (props) => {
  return <form className="form">{props.children}</form>;
};

export const FormSection = (props) => {
  return <div className="form__formSection">{props.children}</div>;
};

export const FormGroup = ({ labelText, inputType, inputValue }) => {
  return (
    <div className="form__formGroup">
      <label className="form__formLabel" name={labelText}>
        {labelText}
      </label>
      <input
        id={labelText}
        className="form__formInput"
        type={inputType}
        value={inputValue}
        readOnly
      />
    </div>
  );
};
