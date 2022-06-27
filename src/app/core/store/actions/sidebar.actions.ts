import { createAction, props } from '@ngrx/store';
import { RightSidebarStatus } from '../../models/sidebar.model';

export const setLeftSidebarOpen = createAction(
  '[Sidebars] Open Left Sidebar',
  props<{ open: boolean }>()
);

export const setSelectedProvider = createAction(
  '[Sidebars] Set Left Sidebar Provider',
  props<{ provider: number | undefined }>()
);

export const setRightSidebarStatus = createAction(
  '[Sidebars] Set Right Sidebar Status',
  props<{ status: RightSidebarStatus }>()
);
