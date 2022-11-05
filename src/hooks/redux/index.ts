import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import type { Dispatch, RootState } from '../../store';

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
