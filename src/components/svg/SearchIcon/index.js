import { Link } from "react-router-dom";

const SearchIcon = ({ className }) => {
  return (
    <div className={className}>
      <Link>
        <button>
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#7A7A7A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 18.9999L14.65 14.6499"
              stroke="#7A7A7A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};
export default SearchIcon;
