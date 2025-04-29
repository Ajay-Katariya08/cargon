import { FC } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Paginations: FC = () => {
  return (
    <div className="row">
      <div className="col-12 m-auto">
        <div className="theme-pagination text-center">
          <ul>
            <li>
              <Link to="#" aria-label="Previous Page">
                <BiChevronLeft style={{ fontSize: "25px" }} />
              </Link>
            </li>
            <li>
              <Link className="active" to="#">
                01
              </Link>
            </li>
            <li>
              <Link to="#">02</Link>
            </li>
            <li>...</li>
            <li>
              <Link to="#">12</Link>
            </li>
            <li>
              <Link to="#" aria-label="Next Page">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Paginations;
