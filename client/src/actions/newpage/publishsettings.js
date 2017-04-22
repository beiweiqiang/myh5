export const CHANGE_PUBLISH_TITLE = 'CHANGE_PUBLISH_TITLE';

export function changePublishTitle(title) {
  return {
    type: CHANGE_PUBLISH_TITLE,
    title,
  };
}
