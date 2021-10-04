const Home = () => {
  return (
    <div className="flex p-20 rounded m-auto mt-7 border border-gray-400 w-11/12">
      <div className="ml-auto">
        <h2 className="text-2xl pb-5">Welcom to Dream Journal</h2>
        <p>
          Do you want to live in your own dream?
          <br />
          Lucid dreaming is one of the most intersting thing about dreaming,
          Imagine you can control what you do in your DREAM. <br />
          Writing your dream as soon as you wake up will help your brain to get
          close to lucid dreaming. <br />
          <a className="register" href="/register">
            Create and account
          </a>{" "}
          tostart you dream journal and get closer to live in your dreams
        </p>
      </div>
    </div>
  );
};
export default Home;
