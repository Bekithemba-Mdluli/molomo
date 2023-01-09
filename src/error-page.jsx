import { Link } from "react-router-dom";
import Header from "./components/Header";

import errorImage from "./images/404.webp";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="error__page">
      <div className="ec">
        <Header />
      </div>

      <div className="error">
        <h2 className="error__top">
          OOPS <br /> <span className="error__text">Something went wrong</span>
        </h2>

        <div className="error__img">
          <img src={errorImage} alt="404" />
        </div>

        <h2 className="error__text">Error 404 page not found</h2>

        <Link to="/" className="error__btn">
          home
        </Link>
      </div>
    </div>
  );
}
