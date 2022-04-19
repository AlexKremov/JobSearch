import Graphics from '../types/Graphics';

export const SET_GRAPHICS = 'SET_GRAPHICS';

export type SetGraphicsAction = {
  type: typeof SET_GRAPHICS
  payload: Graphics
};

interface State {
  graphics: Graphics
}

const initialState = {
  graphics: {
    salary_medium_per_month: [],
    activity_count: [],
  },
};

type Action = SetGraphicsAction;

export type GraphicsState = {
  graphics: Graphics
};

export function setGraphics(payload: Graphics): Action {
  return {
    type: SET_GRAPHICS,
    payload,
  };
}

export const graphics = (
  action: Action,
  state: State = initialState
): State => {
  switch (action.type) {
    case SET_GRAPHICS: {
      return {
        graphics: action.payload,
      };
    }
    default:
      return state;
  }
};
