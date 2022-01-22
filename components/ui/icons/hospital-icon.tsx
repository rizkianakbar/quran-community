import * as React from 'react';

export function HospitalIcon({
  width,
  height,
  fill = 'currentColor',
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 25"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M13.157 1.857a1.157 1.157 0 10-2.314 0v.986h-.986a1.157 1.157 0 000 2.314h.986v.986a1.157 1.157 0 102.314 0v-.986h.986a1.157 1.157 0 000-2.314h-.986v-.986z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        d="M7.5 3.171c-1.087 0-2.025.859-2.025 1.986v.385c-.936.156-1.687.95-1.687 1.958v14.514h-.225c-.777 0-1.463.616-1.463 1.443 0 .828.686 1.443 1.463 1.443h16.875c.776 0 1.462-.615 1.462-1.443 0-.828-.686-1.443-1.462-1.443h-.225V7.5c0-1.008-.751-1.802-1.688-1.958v-.385c0-1.127-.938-1.986-2.025-1.986a.9.9 0 100 1.8c.151 0 .225.11.225.186v1.257a.9.9 0 00.9.9h.563c.151 0 .225.11.225.186v15.414c0 .064.006.126.019.186H14.25v-1.267c0-.598-.504-1.083-1.125-1.083h-2.25c-.621 0-1.125.485-1.125 1.083V23.1H5.568a.902.902 0 00.02-.186V7.5c0-.076.073-.186.225-.186h.562a.9.9 0 00.9-.9V5.157c0-.076.074-.186.225-.186a.9.9 0 000-1.8z"
        fill={fill}
      />
      <path
        d="M8.625 10c-.621 0-1.125.485-1.125 1.083v1.084c0 .598.504 1.083 1.125 1.083s1.125-.485 1.125-1.083v-1.084c0-.598-.504-1.083-1.125-1.083zM8.625 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083S9.75 17.098 9.75 16.5v-1.083c0-.599-.504-1.084-1.125-1.084zM10.875 11.083c0-.598.504-1.083 1.125-1.083s1.125.485 1.125 1.083v1.084c0 .598-.504 1.083-1.125 1.083s-1.125-.485-1.125-1.083v-1.084zM12 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083s1.125-.485 1.125-1.083v-1.083c0-.599-.504-1.084-1.125-1.084zM14.25 11.083c0-.598.504-1.083 1.125-1.083s1.125.485 1.125 1.083v1.084c0 .598-.504 1.083-1.125 1.083s-1.125-.485-1.125-1.083v-1.084zM15.375 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083S16.5 17.098 16.5 16.5v-1.083c0-.599-.504-1.084-1.125-1.084z"
        fill={fill}
      />
    </svg>
  );
}
