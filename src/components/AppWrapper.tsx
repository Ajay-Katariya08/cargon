

import { ReactNode, useEffect } from "react";
import AOS from "aos";

function AppWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init();
  });
  return <>{children}</>;
}

export default AppWrapper;
