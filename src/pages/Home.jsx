import { Hero, InputLink } from "../";

const Home = () => {
  return (
    <div className="gradient h-screen">
      <div className="container md:max-w-screen-md mx-auto p-4">
        <Hero />
        <InputLink />
      </div>
    </div>
  );
};
export default Home;
