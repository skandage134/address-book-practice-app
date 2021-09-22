import { history } from "../../App/App";
import {
  SelectPerson,
  selectPersonReducer,
  SELECT_ACTION_NAME,
} from "../ReducerActions/SelectPerson";

jest.mock("../../App/App.js", () => ({
  history: {
    push: jest.fn(),
  },
}));

const person = {
  firstName: "Test",
  lastName: "Test",
  phoneNumber: "999-999-9999",
  imageUrl: "https://randomuser.me/api/image.jpg",
};

describe("SelectPerson", () => {
  test("Should dispatch a select person action, with new person data", () => {
    const dispatch = jest.fn();
    SelectPerson(person)(dispatch);

    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: SELECT_ACTION_NAME,
        person: person,
      })
    );

    expect(history.push).toBeCalledTimes(1);
  });
});

describe("selectPersonReducer", () => {
  test("Should update state with new person record", () => {
    const state = {
      person: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        imageUrl: "",
      },
    };

    const action = {
      type: SELECT_ACTION_NAME,
      person: person,
    };

    const newState = selectPersonReducer(state, action);

    expect(newState.person).toBe(person);
  });
});
