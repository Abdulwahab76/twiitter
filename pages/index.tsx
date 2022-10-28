import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typings";
import Notification from "./notifications";
import { Offline, Online } from "react-detect-offline";
import { ToastBar, Toaster } from "react-hot-toast";
interface Props {
  tweets: Tweet[];
}
const Home = ({ tweets }: Props) => {
// console.log('tweet',process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

  return (
    <div className="max-h-screen mx-auto lg:max-w-6xl">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className="flex mx-auto jus">
        <Sidebar />

        <Feed tweets={tweets} />

        <Widget />
      </main>
      <div></div>
    </div>
  );
};

export default Home;
export const getstaticprops = async () => {

  const tweets = await fetchTweets();
  console.log('==',tweets);

  return {
    props: {
      tweets: tweets,
    },
  };
};
