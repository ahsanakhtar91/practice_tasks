import React from "react";

interface ILinkProps {
  label: string;
  url: string;
}

const Link = (props: ILinkProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={props?.url ?? ""}>
      {props?.label ?? ""}
    </a>
  );
};

export default Link;
