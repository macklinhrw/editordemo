import { createContext } from "react";

interface NoteContextProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

//@ts-ignore
export const NoteContext = createContext<NoteContextProps>({});
