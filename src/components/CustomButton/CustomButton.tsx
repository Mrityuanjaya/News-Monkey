import { Props } from "./types";

export const CustomButton = ({ children, ...attributes }: Props) => {
  return (
    <button type="button" className={`btn btn-dark`} {...attributes}>
      {children}
    </button>
  );
};
