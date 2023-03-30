import type { JSXLayoutAttributes } from './withLayout';

const MainLayout =
  ({ children, tag: ContentWrapper = 'main', ...props } : JSXLayoutAttributes):JSX.Element => {
  return (
    <>
      <header className="header">
        {/* <AppNavbar /> */}
        <nav>NAVBAR FODA</nav>
      </header>
      <ContentWrapper className="page">
        {children?.content && <children.content {...props} />}
      </ContentWrapper>
      {children?.footer && <children.footer />}
    </>
  );
};


export default MainLayout;
