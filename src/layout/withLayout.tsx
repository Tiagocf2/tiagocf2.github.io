import React from 'react';
import PropTypes from 'prop-types';
// import Footer from './footer/Footer';

const defaultFooter = null;

/**
 * @typedef {Object} JSXLayoutProps
 * @property {Object} children
 * @property {JSX.Element} children.content
 * @property {JSX.Element?} children.footer
 * @property {(string|React.ElementType)} contentTag
 */

/**
 * @callback LayoutElement
 * @param {JSXLayoutProps} props
 */

/**
 * @callback JSXElementWithLayout
 * @param {JSX.ElementAttributesProperty} props
 */

/**
 * @callback LayoutHOC
 * @param {React.ElementType} component O componente no qual será aplicado o Layout
 * @param {Object} options
 * @param {string} options.tag A tag wrapper do conteúdo (component)
 * @returns {JSXElementWithLayout}
 */

/** ### withLayout
 * Cria um HOC de Layout que pode ser aplicado em algum outro elemento.
 *
 * > **Exemplo:**
 * > ```javascript
 * > const LayoutHoc = withLayout(MainLayout);
 * > export default LayoutHoc(MyPage);
 * > ```
 *
 * Veja mais sobre a [arquitetura Higher Order Components (HOC)](https://reactjs.org/docs/higher-order-components.html).
 *
 *
 * @param {LayoutElement} Layout O elemento de layout a ser aplicado
 * @param {Object} options Opções extras
 * @param {JSX.Element?} options.footer Um elemento de footer (opcional)
 * @param {*} footer Um elemento de footer (opcional)
 * @returns {LayoutHOC}
 *
 * Veja também: {@link LayoutElement}, {@link LayoutHOC}
 */

const withLayout = (Layout, { footer } = {}) => {
  const _footer = footer || defaultFooter;
  // /** @type {LayoutHOC}  */
  function LayoutHoc(component, options = { tag: 'main' }) {
    // /** @type {JSXElementWithLayout} */
    const ComponentWithLayout = (props) => (
      <Layout
        children={{ content: component, footer: _footer }}
        contentTag={options?.tag}
        {...props}
      />
    );

    for (let key in component) {
      ComponentWithLayout[key] = component[key];
    }
    return ComponentWithLayout;
  }
  LayoutHoc.propTypes = {
    component: PropTypes.elementType,
    options: PropTypes.shape({
      tag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    }),
  };
  return LayoutHoc;
};

export default withLayout;
