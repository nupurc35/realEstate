import usePageView from "../hooks/usePageView";

export default function Dashboard() {
  usePageView("Dashboard");

  return (
    <div>
      <h1>Total Verified Leads</h1>
      <h2>84</h2>
      <ul>
        <li>Calls: 26</li>
        <li>WhatsApp: 38</li>
        <li>Chat: 12</li>
        <li>Forms: 8</li>
      </ul>
    </div>
  );
}