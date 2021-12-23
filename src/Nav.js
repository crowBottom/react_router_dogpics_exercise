import { Outlet, Link } from "react-router-dom";
import DogList from './DogList';

const Nav = () => {
  return (
    <>
      <div className="w3-bar w3-dark-grey">
        <div className="w3-bar-item">
          <h1>Dogs, Dogs, and More Dogs!</h1>
        </div>
      </div>
      <div className="w3-margin">
        <DogList />
      </div>
      <Outlet />
    </>
  )
}

export default Nav;
