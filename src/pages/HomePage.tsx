import MainLayout from "@/layout/MainLayout";

const HomePage = () => {
  return <div style={{background: 'red'}}>Home page</div>;
};

export default MainLayout(HomePage, {footer: ()=><footer>Footer 😎👍</footer>});
