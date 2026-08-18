import { AppContainer } from "../AppContainer";
import { Navbar } from "../Navbar";

export function AppHeader() {
  return (
    <header className="sticky top-0 bg-primary-background/92 backdrop-blur-sm w-full z-40 border-b border-primary-foreground/10 mb-2">
      <AppContainer>
        <div className="flex w-full h-18 items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-9.5 h-9.5 bg-primary-red text-primary-text flex justify-center items-center font-bricolage text-xl font-extrabold rounded-[50%_50%_50%_12px]">R</div>
            <div className="flex flex-col -space-y-2">
              <p className="text-xl font-bricolage whitespace-nowrap font-extrabold tracking-[-0.01em] text-primary-foreground">Ritmo Arenal</p>
              <p className="text-sm font-stretch-75% uppercase mt-0.75 text-primary-foreground/50">
                La Fortuna, at your pace
              </p>
            </div>
          </div>
          <Navbar />
        </div>
      </AppContainer>
    </header>
  );
}
