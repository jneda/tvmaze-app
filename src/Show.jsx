import { useLoaderData } from "react-router-dom";
import { getShowById } from "./lib/tmazeApi";

import Header from "./components/Header";
import ShowDetails from "./components/ShowDetails";
import Footer from "./components/Footer";

import "./Show.css";

export async function loader({ params }) {
  const show = await getShowById(params.id);
  return { show };
}

export default function Show() {
  const { show } = useLoaderData();
  const {
    _embedded: { cast },
  } = show;

  return (
    <>
      <Header />
      <ShowDetails show={show} cast={cast} />
      <Footer />
    </>
    // <pre>{JSON.stringify(show, null, 2)}</pre>
  );
}
