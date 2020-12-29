import {
  ButtonProps,
  Icon,
  IconButton,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

export interface ToolbarButtonProps {
  icon?: IconType;
  label?: string;
  btnShadow: { light: string; dark: string };
  btnActive: { light: string; dark: string };
  btnHover: { light: string; dark: string };
}

export const ToolbarButton: React.FC<ButtonProps & ToolbarButtonProps> = ({
  icon,
  label,
  btnActive,
  btnShadow,
  btnHover,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <Tooltip hasArrow label={label}>
      <IconButton
        {...props}
        aria-label={label ? label : ""}
        icon={<Icon boxSize={5} as={icon}></Icon>}
        boxShadow={btnShadow[colorMode]}
        _active={{
          bg: btnActive[colorMode],
          transform: "scale(0.98)",
        }}
        _hover={{
          bg: btnHover[colorMode],
        }}
      />
    </Tooltip>
  );
};
