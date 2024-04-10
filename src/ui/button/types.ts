export enum ButtonType {
  DEFOLT = "defolt",
  WHITE = "white",
  EMPTY = "empty",
  WHITEBORDER = "white-border",
}

export interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  handlerClick?: () => void;
}
