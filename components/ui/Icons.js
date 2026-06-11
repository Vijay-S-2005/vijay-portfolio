const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
};

export function GitHubIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1.27a11 11 0 0 0-3.48 21.46c.55.1.75-.24.75-.53v-1.86c-3.06.66-3.71-1.48-3.71-1.48-.5-1.27-1.22-1.6-1.22-1.6-1-.69.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.47-2.45-.28-5.02-1.22-5.02-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.24-2.58 5.17-5.04 5.44.4.34.74 1 .74 2.02v3c0 .29.2.64.76.53A11 11 0 0 0 12 1.27z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.2H5.67v8.14h2.67zM7 9.05a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.29v-4.46c0-2.39-1.28-3.5-2.99-3.5-1.38 0-2 .76-2.34 1.29V10.2h-2.67c.04.74 0 8.14 0 8.14h2.67v-4.55c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.74 1.34 1.82v4.35h2.54z" />
    </svg>
  );
}

export function MailIcon({ size = 20, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 16, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 24, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function ChevronRightIcon({ size = 24, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5 15.75 12l-7.5 7.5"
      />
    </svg>
  );
}

export function CloseIcon({ size = 20, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export function MenuIcon({ size = 22, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export function SearchIcon({ size = 16, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

export function DownloadIcon({ size = 16, className = "" }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}
