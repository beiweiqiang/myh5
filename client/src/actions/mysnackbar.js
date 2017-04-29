export const DISPLAY_SNACKBAR = 'DISPLAY_SNACKBAR';

export function displaySnackbar(boolean, mes) {
  return {
    type: DISPLAY_SNACKBAR,
    open: boolean,
    mes,
  };
}
