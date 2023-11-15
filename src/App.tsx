import { ContainerApp, ContainerView } from "./app-styles.ts";
import { Footer, Header } from "./index.tsx";

function App() {
  return (
    <ContainerApp>
      <Header />
      <ContainerView>
        <Footer />
      </ContainerView>
    </ContainerApp>
  );
}

export default App;
