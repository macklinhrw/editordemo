import { createContext } from "react";

interface LinkContextProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

//@ts-ignore
export const LinkContext = createContext<LinkContextProps>({});
