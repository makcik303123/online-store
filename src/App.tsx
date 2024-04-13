// import {Header} from "./components/Header/Header";
// import {Button, ButtonType} from "./ui/button";
import CardContainer from "./ui/cardContainer/CardContainer.tsx";
import { ourProduct } from "./ui/cardContainer/cardsProducts.data.ts";
import { ourDogs } from "./ui/cardContainer/cardsDogs.data.ts";

export type StyleType = "products" | "dogs";

function App() {
  return (
    <div className="app">
      {/*<Header />*/}
      {/*<div>*/}
      {/*  <Button type={ButtonType.DEFOLT}>*/}
      {/*    <span>Сommunity</span>*/}
      {/*    <span> +</span>*/}
      {/*  </Button>*/}

      {/*  <Button type={ButtonType.EMPTY}>*/}
      {/*    <span>Explore Now</span>*/}
      {/*  </Button>*/}
      {/*  <Button type={ButtonType.WHITE}>*/}
      {/*    <span>Explore Now</span>*/}
      {/*  </Button>*/}
      {/*  <Button type={ButtonType.WHITEBORDER}>*/}
      {/*    <span>Explore Now</span>*/}
      {/*  </Button>*/}
      {/*</div>*/}

      {/* <CardContainer cards={ourProduct} style='products'/> */}
      <CardContainer cards={ourDogs} style="dogs" />
    </div>
  );
}

export default App;
