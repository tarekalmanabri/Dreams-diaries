import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Button from "../components/Button";
import { Layout } from "../components/Layout";
import { DreamData, dreamApi } from "../services/api/dreamApi";
import { RootState } from "../store";
import Dream from "./dreams/Dream";

const Dashboard: FC = () => {
  const { auth, user } = useSelector((state: RootState) => state);

  const [dreams, setDreams] = useState<DreamData[]>([]);

  useEffect(() => {
    dreamApi.getDreams().then(setDreams).catch(console.log);
  }, []);

  return auth.token && user ? (
    <Layout>
      <header className="bg-white shadow">
        <p className="text-xl ml-7 pt-3">
          Welcome, <span className="text-red-400">{user.username}</span>
        </p>
        <div className="flex max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Link to="/dreams/create" className="ml-auto">
            <Button title="+ New Dream" />
          </Link>
        </div>
      </header>
      <div className="mt-5">
        {dreams.map((dream, i) => (
          <Dream dream={dream.content} key={i} />
        ))}
      </div>
    </Layout>
  ) : (
    <Redirect to="/signin" />
  );
};

export default Dashboard;
