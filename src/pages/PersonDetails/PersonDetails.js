import { Fragment } from "react";

import { Form, FormGroup, FormSection } from "shared/Form";
import { ButtonContainer, Button } from "shared/Button";
import * as style from "./PersonDetails.module.scss";

export const PersonDetails = ({ person, onClose }) => {
  console.log(person);
  return (
    <div className={style.PersonDetails}>
      {person.firstName && (
        <Fragment>
          <h2>{`${person.firstName} ${person.lastName}`}</h2>

          <Form>
            <FormSection>
              <img
                className="form_formImage"
                src={person.imageUrl}
                alt={`${person.firstName} ${person.lastName}`}
              />
            </FormSection>

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

          <ButtonContainer position="flex-start">
            <Button
              buttonText={"Back to Results"}
              buttonClass={"primary"}
              onClick={onClose}
            />
          </ButtonContainer>
        </Fragment>
      )}
    </div>
  );
};

export default PersonDetails;
