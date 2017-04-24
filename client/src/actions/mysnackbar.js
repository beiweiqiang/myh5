export const DISPLAY_SNACKBAR = 'DISPLAY_SNACKBAR';

export function displaySnackbar(boolean) {
  return {
    type: DISPLAY_SNACKBAR,
    display: boolean,
  };
}
