import clsx from "clsx";

import c from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...handlers
}) => {
  return (
    <div className={c.buttonContainer}>
      <button
        className={clsx(c.button, {
          [c.primary]: variant === "primary",
          [c.secondary]: variant === "secondary",
        })}
        {...handlers}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
