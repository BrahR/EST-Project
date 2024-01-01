import { Link } from "react-router-dom";

export default function Breadcrumbs({ value }: { value: string }) {
  return (
    <nav className="lx" aria-label="Breadcrumb">
      <ol role="list" className="lx yz abj">
        <li>
          <div>
            <Link className="axp bkx" to={"/dashboard"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="nz sb up"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="t">Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="lx yz">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="nz sb up axp"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
            <a href="#" className="jx awa awe axr bkz">
              {value}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
