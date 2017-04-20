export const CHANGE_TEXT_POSITION = 'CHANGE_TEXT_POSITION';

export function changeTextPosition(page, item, x, y) {
  return {
    type: CHANGE_TEXT_POSITION,
    page,
    item,
    x,
    y,
  };
}
