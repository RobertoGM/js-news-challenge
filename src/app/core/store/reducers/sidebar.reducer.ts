import { createReducer, on } from '@ngrx/store';
import { RightSidebarStatus } from '../../models/sidebar.model';
import * as ScoreboardPageActions from '../actions/sidebar.actions';

export interface SidebarState {
  leftSidebarOpen: boolean;
  rightSidebarStatus: RightSidebarStatus;
  selectedProvider: number | undefined;
}

export const initialState: SidebarState = {
  leftSidebarOpen: false,
  rightSidebarStatus: RightSidebarStatus.close,
  selectedProvider: undefined,
};

export const sidebarReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.setLeftSidebarOpen, (state, { open }) => ({
    ...state,
    leftSidebarOpen: open,
  })),
  on(ScoreboardPageActions.setRightSidebarStatus, (state, { status }) => ({
    ...state,
    rightSidebarStatus: status,
  })),
  on(ScoreboardPageActions.setSelectedProvider, (state, { provider }) => ({
    ...state,
    selectedProvider: provider,
  }))
);
