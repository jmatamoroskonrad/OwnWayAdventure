import { AppContainer } from "../AppContainer";
import { Navbar } from "../Navbar";

export function AppHeader() {
  return (
    <header className="sticky top-0 bg-primary-background/95 backdrop-blur-sm w-full z-40 border-b border-primary-foreground/50 mb-2">
      <AppContainer>
        <div className="flex w-full h-18 items-center justify-between ">
          <div className="flex flex-col -space-y-2">
            <p className="text-xl">Ritmo Arenal</p>
            <p className="text-sm font-stretch-75%">LA FORTUNA, AT YOUR PACE</p>
          </div>
          <Navbar />
        </div>
      </AppContainer>
    </header>
  );
}
