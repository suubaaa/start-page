import DateTime from "./components/DateTime";
import Links from "./components/Links";
import Search from "./components/Search";

export default function App() {
  return(
    <div className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundImage: "url(/start-page/background.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <DateTime />
      <Links />
      <Search />
    </div>
  )
}
