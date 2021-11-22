import { FC } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { RootState } from "../store";

const Home: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {token ? (
        <Layout>
          <>Signed in home</>
        </Layout>
      ) : (
        <div className="flex flex-col lg:flex-row md:p-20 p-4 rounded m-auto mt-7 border border-gray-400 w-11/12">
          <img
            src="/img/backgrounds/logo_small.png"
            alt="logo"
            className="w-44 h-28 mb-5 lg:ml-auto md:w-48 lg:mb-0"
          />
          <div className="ml-auto">
            <h2 className="text-2xl pb-5">Welcom to Dream Journal</h2>
            <p className="text-left">
              Do you want to live in your own dream?
              <br />
              Lucid dreaming is one of the most intersting thing about dreaming,
              Imagine you can control what you do in your DREAM. <br />
              Writing your dream as soon as you wake up will help your brain to
              get close to lucid dreaming. <br />
              <a className="register" href="/register">
                Create and account
              </a>{" "}
              tostart you dream journal and get closer to live in your dreams
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
