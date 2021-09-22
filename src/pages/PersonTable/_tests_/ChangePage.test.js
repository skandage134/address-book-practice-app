import {
  ChangePage,
  changePageReducer,
  CHANGE_PAGE_ACTION_NAME,
} from "../ReducerActions/ChangePage";

const page = 2;

describe("ChangePage", () => {
  test("Should dispatch a change page action, with new page number", () => {
    const dispatch = jest.fn();
    ChangePage(page)(dispatch);

    expect(dispatch).toBeCalledWith(
      expect.objectContaining({
        type: CHANGE_PAGE_ACTION_NAME,
        page: page,
      })
    );
  });
});

describe("changePageReducer", () => {
  test("Should update state with new page", () => {
    const state = {
      pagination: {
        page: 1,
      },
    };

    const action = {
      type: CHANGE_PAGE_ACTION_NAME,
      page: page,
    };

    const newState = changePageReducer(state, action);

    expect(newState.pagination.page).toBe(page);
  });
});
