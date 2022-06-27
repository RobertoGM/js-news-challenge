import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SidebarState } from '../reducers/sidebar.reducer';

export const selectSidebar = createFeatureSelector<any>('sidebar');

export const selectLeftSidebarOpen = createSelector(
  selectSidebar,
  (state: SidebarState) => state.leftSidebarOpen
);

export const selectRightSidebarStatus = createSelector(
  selectSidebar,
  (state: SidebarState) => state.rightSidebarStatus
);

export const selectSelectedProvider = createSelector(
  selectSidebar,
  (state: SidebarState) => state.selectedProvider
);
