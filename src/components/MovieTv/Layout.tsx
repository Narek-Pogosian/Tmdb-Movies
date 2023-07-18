import type { ReactNode } from "react";
import MyDisclosure from "../shared/MyDisclosure";
import Filters from "./Filters/Filters";
import useMediaQuery from "../../hooks/useMediaQuery";
import ScrollTopButton from "../shared/ScrollTopButton";

const Layout = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="flex flex-col gap-8 py-4 xl:flex-row">
      <div className="w-full xl:w-fit xl:sticky top-24 h-fit">
        <MyDisclosure
          buttonText="Filters"
          openByDefault={isDesktop}
          key={String(isDesktop)}
          // Discolsure only checks the value for the first "paint", so have add key to
          // get it to open by default on bigger screens.
        >
          <Filters />
        </MyDisclosure>
      </div>
      {children}
      {!isDesktop && <ScrollTopButton />}
    </div>
  );
};

export default Layout;
