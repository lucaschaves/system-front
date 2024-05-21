import { ComponentProps, ReactNode, forwardRef } from "react";

interface IButtonProps extends ComponentProps<"button"> {
    children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { children } = props;

    return (
        <button ref={ref} className={``}>
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button };
