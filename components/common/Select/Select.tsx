import React, { forwardRef, SelectHTMLAttributes } from "react";

type Option = {
    value: string | number;
    label: React.ReactNode;
    disabled?: boolean;
};

export type SelectProps = {
    label?: string;
    options?: Option[];
    placeholder?: string;
    error?: string | boolean;
    className?: string;
    containerClassName?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    /** optional URL to png/svg arrow icon. If omitted an inline SVG is used */
    iconSrc?: string;
    /** optional media above the select. string = image URL or React node */
    media?: string | React.ReactNode;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">;

const sizeClasses: Record<NonNullable<SelectProps["size"]>, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
};

function merge(...parts: Array<string | undefined | false | null>) {
    return parts.filter(Boolean).join(" ");
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            label,
            id,
            options = [],
            placeholder,
            error,
            className,
            containerClassName,
            size = "md",
            disabled,
            iconSrc,
            media,
            children,
            ...rest
        },
        ref
    ) => {
        const rootClass = merge("w-full overflow-hidden", containerClassName);
        const controlClass = merge(
            "block w-full bg-white disabled:opacity-60 disabled:cursor-not-allowed appearance-none",
            // requested desktop text size and leading
            "md:text-[16px] md:leading-[36px]",
            // rounded 10px and 1px border with requested color (use `border` for Tailwind)
            "rounded-[10px] border border-[#BBBBBB]",
            sizeClasses[size],
            className,
            error ? "border-red-500" : ""
        );

        return (
            <div className={rootClass}>
                {/* media above field (optional) */}
                {typeof media === "string" && (
                    <div
                        aria-hidden
                        className="mb-2 w-[323px] h-[52px] rounded-[10px] border border-[#BBBBBB] bg-center bg-cover"
                        style={{ backgroundImage: `url(${media})` }}
                    />
                )}
                {typeof media !== "string" && media && (
                    <div className="mb-2 w-[323px] h-[52px] rounded-[10px] border border-[#BBBBBB] overflow-hidden">{media}</div>
                )}

                {label && (
                    <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}

                <div className="relative">
                    <select
                        id={id}
                        ref={ref}
                        className={controlClass + " pr-10"}
                        aria-invalid={!!error}
                        disabled={disabled}
                        {...rest}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}

                        {options.map((opt) => (
                            <option key={String(opt.value)} value={opt.value} disabled={opt.disabled}>
                                {opt.label}
                            </option>
                        ))}

                        {children}
                    </select>

                    {/* right-side arrow (24x24) */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {iconSrc ? (
                            <div
                                aria-hidden
                                className="h-6 w-6 bg-center bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url(${iconSrc})` }}
                            />
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                aria-hidden
                            >
                                <path d="M7 10l5 5 5-5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                </div>

                {error && typeof error === "string" && (
                    <p className="mt-1 text-xs text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";

export default Select;
