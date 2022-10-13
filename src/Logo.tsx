import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={78}
      height={90}
      viewBox="0 0 105 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105 60.01c0-6.976-8.71-13.587-22.066-17.687 3.082-13.653 1.712-24.514-4.323-27.992-1.391-.816-3.018-1.202-4.794-1.202v4.787c.984 0 1.776.193 2.44.558 2.91 1.674 4.173 8.05 3.189 16.25-.236 2.018-.621 4.143-1.092 6.31-4.195-1.03-8.775-1.824-13.59-2.339-2.89-3.971-5.886-7.578-8.904-10.733 6.977-6.504 13.526-10.067 17.978-10.067v-4.787c-5.885 0-13.59 4.207-21.38 11.505-7.791-7.255-15.496-11.42-21.382-11.42v4.787c4.43 0 11.001 3.542 17.978 10.003a101.336 101.336 0 00-8.839 10.712c-4.837.515-9.417 1.31-13.612 2.361a64.944 64.944 0 01-1.113-6.225c-1.006-8.2.236-14.575 3.125-16.271.642-.386 1.477-.558 2.461-.558v-4.787c-1.798 0-3.424.386-4.837 1.202-6.014 3.478-7.362 14.318-4.259 27.927C8.668 46.466 0 53.056 0 60.011c0 6.976 8.71 13.588 22.066 17.688-3.082 13.652-1.712 24.514 4.323 27.991 1.391.816 3.018 1.202 4.816 1.202 5.885 0 13.59-4.207 21.38-11.505 7.791 7.255 15.496 11.42 21.382 11.42 1.797 0 3.424-.387 4.837-1.203 6.014-3.477 7.362-14.317 4.259-27.927C96.332 73.577 105 66.966 105 60.011zM77.134 45.694c-.792 2.769-1.776 5.624-2.89 8.479a101.65 101.65 0 00-2.803-5.152 116.195 116.195 0 00-3.082-5.023c3.04.45 5.971 1.009 8.775 1.696zm-9.802 22.861c-1.67 2.898-3.382 5.646-5.158 8.2-3.19.28-6.42.43-9.674.43-3.232 0-6.464-.15-9.631-.408a118.34 118.34 0 01-5.18-8.157 111.908 111.908 0 01-4.451-8.544 112.034 112.034 0 014.43-8.565c1.67-2.898 3.382-5.645 5.158-8.2 3.19-.279 6.42-.43 9.674-.43 3.232 0 6.464.151 9.631.409 1.776 2.554 3.51 5.28 5.18 8.157a111.908 111.908 0 014.451 8.543 120.31 120.31 0 01-4.43 8.565zm6.913-2.79a92.185 92.185 0 012.953 8.543 95.777 95.777 0 01-8.817 1.717 118.639 118.639 0 003.082-5.087 122.062 122.062 0 002.782-5.173zM52.543 88.668a88.44 88.44 0 01-5.95-6.87c1.926.087 3.895.15 5.886.15 2.011 0 4.002-.042 5.95-.15a83.737 83.737 0 01-5.886 6.87zM36.619 76.024a96.295 96.295 0 01-8.774-1.695c.791-2.77 1.776-5.625 2.889-8.48a101.736 101.736 0 002.803 5.152 142.217 142.217 0 003.082 5.023zm15.817-44.67a88.418 88.418 0 015.95 6.869 132.04 132.04 0 00-5.886-.15c-2.012 0-4.002.042-5.95.15a83.737 83.737 0 015.886-6.87zM36.598 43.997a118.642 118.642 0 00-5.864 10.24 92.195 92.195 0 01-2.954-8.544 103.69 103.69 0 018.818-1.696zm-19.37 26.876C9.653 67.63 4.752 63.38 4.752 60.01s4.901-7.642 12.478-10.862c1.84-.794 3.852-1.503 5.928-2.168 1.22 4.207 2.826 8.586 4.816 13.073-1.97 4.465-3.553 8.822-4.751 13.008a64.884 64.884 0 01-5.993-2.19zm11.515 30.674c-2.91-1.674-4.173-8.05-3.189-16.25.236-2.017.621-4.142 1.092-6.31 4.195 1.03 8.775 1.824 13.59 2.34 2.89 3.97 5.886 7.577 8.904 10.732-6.977 6.505-13.526 10.068-17.978 10.068-.963-.022-1.777-.215-2.419-.58zM79.51 85.19c1.006 8.2-.236 14.576-3.125 16.271-.642.387-1.477.559-2.461.559-4.43 0-11.001-3.542-17.978-10.004a101.336 101.336 0 008.839-10.711c4.837-.515 9.417-1.31 13.612-2.361.492 2.168.877 4.25 1.113 6.246zm8.24-14.317c-1.84.794-3.853 1.502-5.929 2.168-1.22-4.208-2.825-8.587-4.815-13.073 1.969-4.465 3.552-8.823 4.751-13.009a67.741 67.741 0 016.014 2.19c7.576 3.241 12.478 7.492 12.478 10.862-.022 3.37-4.923 7.642-12.5 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M52.479 69.82c5.401 0 9.78-4.391 9.78-9.81 0-5.417-4.379-9.81-9.78-9.81-5.402 0-9.781 4.393-9.781 9.81 0 5.419 4.379 9.81 9.78 9.81z"
        fill="#81D8F7"
      />
    </svg>
  )
}
