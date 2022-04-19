import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGraphics } from '../api/queries';
import { GraphicsState, setGraphics } from './graphics';
import { AppState } from './rootReducer';

export const useGraphics = () => {
  const dispatch = useDispatch();
  const { graphics } = useSelector<AppState, GraphicsState>(
    (state) => state.graphics
  );

  React.useEffect(() => {
    getGraphics().then((res) => {
      dispatch(setGraphics(res.data));
    });
  }, [dispatch]);

  return {
    graphics,
  };
};
