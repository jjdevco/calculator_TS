import { useTheme } from "../hooks/useTheme";

interface ButtonProps {
  children: React.ReactNode | Array<React.ReactNode>;
  className?: string | (() => string);
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ children, className = "", ...rest }: ButtonProps) {
  const { theme } = useTheme();
  const classes = `btn ${theme} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
