import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
* Reset the window scroll position to the top of the screen on every route change.
* 
* Mount once inside the router (AppLayout)
* Component extracted from Audition House project
*/

export function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
