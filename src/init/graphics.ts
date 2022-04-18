import Graphics from '../types/Graphics';

export const SET_GRAPHICS = 'SET_GRAPHICS';

export type setGraphicsAction = {
  type: typeof SET_GRAPHICS;
  payload: Graphics;
};

interface State {
  graphics: Graphics;
}

const initialState = {
  graphics: {
    salary_medium_per_month: [],
    activity_count: []
  },
};

type Action = setGraphicsAction;

export type GraphicsState = {
  graphics: Graphics;
};

export function setGraphics(payload: Graphics): Action {
  return {
    type: SET_GRAPHICS,
    payload,
  };
}

export const graphics = (state: State = initialState, action: Action): State => {
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