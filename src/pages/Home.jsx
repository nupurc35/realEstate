import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <h1 style={{ padding: "40px" }}>Amaze Realtors</h1>
    </>
  );
}