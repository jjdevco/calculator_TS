interface ButtonProps {
  children: React.ReactNode | Array<React.ReactNode>;
  className?: string | (() => string);
}

export function Button({ children, className = "" }: ButtonProps) {
  const themeVariant = "light";
  const classes = `btn ${themeVariant} ${className}`;
  return <button className={classes}>{children}</button>;
}
