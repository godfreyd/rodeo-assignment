import { forwardRef, HTMLAttributes } from "react";

export default forwardRef<SVGSVGElement, HTMLAttributes<SVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      {...props}
      focusable="false"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.708 2H4.292A2.294 2.294 0 0 0 2 4.292v15.416A2.294 2.294 0 0 0 4.292 22h15.416A2.294 2.294 0 0 0 22 19.708V4.292A2.294 2.294 0 0 0 19.708 2zm.792 17.708a.793.793 0 0 1-.792.792H4.292a.793.793 0 0 1-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71v-.002z"
        fill="currentColor"
      ></path>
      <path
        d="M7.032 10.035a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zm0 4.406a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zm9.936-4.406a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zm0 4.406a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zM12 10.035a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zm0 4.406a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zM7.032 18.77a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57zm4.968 0a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57z"
        fill="#000"
      ></path>
    </svg>
  )
);