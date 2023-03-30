const MainLayout =
  (Content: any, { tag: ContentWrapper = 'main', footer: Footer, ...props }: { tag?: any, props?: any, footer?: any } = {}) => {
  return ()=>(
    <>
      <header className="header">
        {/* <AppNavbar /> */}
        <nav>NAVBAR FODA</nav>
      </header>
      <ContentWrapper className="page">
        {Content && <Content {...props} />}
      </ContentWrapper>
      {Footer && <Footer />}
    </>
  );
};


export default MainLayout;
