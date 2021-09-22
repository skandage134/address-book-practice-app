import { Fragment } from "react";

import { Form, FormGroup, FormSection } from "components/Form";
import { ButtonContainer, Button } from "components/Button";
import * as style from "./PersonDetails.module.scss";

export const PersonDetails = ({ person, onClose }) => {
  return (
    <Fragment>
      {person.firstName && (
        <div className={style.PersonDetails}>
          <Fragment>
            <h2
              style={{ textAlign: "center" }}
            >{`${person.firstName} ${person.lastName}`}</h2>

            <Form>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  className="form_formImage"
                  src={person.imageUrl}
                  alt={`${person.firstName} ${person.lastName}`}
                />
              </div>

              <FormSection>
                <FormGroup
                  labelText="First Name"
                  inputType="text"
                  inputValue={person.firstName}
                />

                <FormGroup
                  labelText="Last Name"
                  inputType="text"
                  inputValue={person.lastName}
                />

                <FormGroup
                  labelText="Phone Number"
                  inputType="text"
                  inputValue={person.phoneNumber}
                />
              </FormSection>
            </Form>

            <ButtonContainer position="center">
              <Button
                buttonText={"CLOSE"}
                buttonClass={"primary"}
                onClick={onClose}
              />
            </ButtonContainer>
          </Fragment>
        </div>
      )}
    </Fragment>
  );
};

export default PersonDetails;
