import Graphics from '../types/Graphics';

export const SET_GRAPHICS = 'SET_GRAPHICS';

export type setGraphicsAction = {
  type: typeof SET_GRAPHICS;
  payload: Graphics[];
};

interface State {
  list: Graphics[];
}

const initialState = {
  list: [],
};

type Action = setGraphicsAction;

export type GraphicsState = {
  list: Graphics[];
};

export function setGraphics(payload: Graphics[]): Action {
  return {
    type: SET_GRAPHICS,
    payload,
  };
}

export const graphics = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_GRAPHICS: {
      return {
        list: action.payload,
      };
    }
    default:
      return state;
  }
};