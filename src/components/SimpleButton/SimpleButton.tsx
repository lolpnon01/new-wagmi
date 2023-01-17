import cn from "classnames"

import "./SimpleButton.scss"

type Props = {
  variant?: "default" | "colored";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  text: string;
  className?: string;
  type?: "button" | "submit";
  isLeft?: boolean;
}

export const SimpleButton = ({
  variant = "default",
  text,
  onClick,
  href,
  type = "button",
  disabled,
  className,
  isLeft,
}: Props): JSX.Element => {
  if (!!href?.length) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={cn("simple-button", variant, className, {
          left: isLeft,
        })}
      >
        {text}
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn("simple-button", variant, className, {
        left: isLeft,
      })}
    >
      {text}
    </button>
  )
}
