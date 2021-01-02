import { Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { LinkComponent } from "./LinkComponent";
import { LinkContext } from "./LinkContext";

interface LinkWrapperProps {}

export const LinkWrapper: React.FC<LinkWrapperProps> = React.memo(
  (props: any) => {
    const [show, setShow] = useState(false);
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    console.log(show);
    return (
      <LinkContext.Provider value={{ show, setShow }}>
        {!show ? (
          <Link
            href={url}
            color="blue.600"
            _hover={{
              color: "blue.500",
              textDecoration: "underline",
            }}
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          >
            {props.children}
          </Link>
        ) : (
          <>
            <LinkComponent {...props}>{props.children}</LinkComponent>
          </>
        )}
      </LinkContext.Provider>
    );
  }
);
