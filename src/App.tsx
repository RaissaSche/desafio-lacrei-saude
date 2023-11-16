import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerApp, ContainerView } from "./app-styles.ts";
import { Footer, Header, Home, PessoaUsuaria, Profissional, NoPage } from "./index.tsx";

function App() {
  return (
    <ContainerApp>
      <Header />
      <ContainerView>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/pessoa-usuaria" element={<PessoaUsuaria/>}/>
          <Route path="/profissional" element={<Profissional/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
        </BrowserRouter>
        <Footer />
      </ContainerView>
    </ContainerApp>
  );
}

export default App;
