import "./App.scss";
import { Header } from "./components/Header/Header";
import { Button, ButtonType } from "./ui/button";
import { sectionHead } from "./ui/sectionHead/sectionHead";

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Button type={ButtonType.DEFOLT}>
          <span>Сommunity</span>
          <span> +</span>
        </Button>

        <Button type={ButtonType.EMPTY}>
          <span>Explore Now</span>
        </Button>
        <Button type={ButtonType.WHITE}>
          <span>Explore Now</span>
        </Button>
        <Button type={ButtonType.WHITEBORDER}>
          <span>Explore Now</span>
        </Button>
      </div>

      <sectionHead title="123" subTitle="123" />
    </div>
  );
}

export default App;
