/**
 * Create input-list component.
 *
 * @param {HTMLElement} componentElem
 *
 * @returns {HTMLElement}
 */
export function createComponent(componentElem) {
  const templateElem = componentElem.querySelector('.app-tmp-number-component');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-number-component is not found');
  }
}