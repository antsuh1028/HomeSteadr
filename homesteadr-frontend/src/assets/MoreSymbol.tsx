import { SVGProps } from "react";

interface BaselineMoreHorizProps extends SVGProps<SVGSVGElement> {
    color?: string;
}

export function BaselineMoreHoriz({ color = "currentColor", ...props }: BaselineMoreHorizProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill={color}
                d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
            ></path>
        </svg>
    );
}
