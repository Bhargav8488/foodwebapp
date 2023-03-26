import tw from "tailwind-styled-components";
import { compress } from "../../next.config";
import HomeContainer from "../pages/Home";

export default function Home() {
  return (
    <Main>
      <AppContainer>
        <HomeContainer />
      </AppContainer>
    </Main>
  );
}

const Main = tw.div`
w-full
min-h-screen
`;

const AppContainer = tw.div`
max-w-7xl
mx-auto
`;
