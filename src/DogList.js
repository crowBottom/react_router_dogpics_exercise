import dogs from './Dogs'
import { Link } from "react-router-dom";

const DogList = ({ defaultDogs=dogs }) => {
  const img_styles = {
    width: "100%",
    height: "auto"
  }
  const profile_btn = {
    width: "25%",
    height: "auto"
  }

  return (
    <>
      {
        defaultDogs.map(
          dog => (
            <div key={dog.name} style={profile_btn} className="w3-btn w3-ripple w3-round">
              <Link to={`/dogs/${dog.name}`}>
              <img style={img_styles}  src={dog.src} />
              <h3>{dog.name}</h3>
              <hr />
              </Link>
            </div>
          )
        )
      }
    </>
  )
}

export default DogList;
