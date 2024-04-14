import "./App.scss";
import { Header } from "./components/Header/Header";
import img from "./assets/home/Frame 146.png";
import { Button } from "./ui/button";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <div className="wrapper-body container">
          <div className="wrapper__left">
            <div className="left__title">One more friend</div>
            <div className="left__subtitle">Thousands more fun!</div>
            <p className="left-text">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div>
              <Button type={"default"}> Hello</Button>
            </div>
          </div>
          <div className="wrapper__right">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
