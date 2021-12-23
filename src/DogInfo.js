import { useParams, Link } from 'react-router-dom';
import dogs from './Dogs'

const Doginfo = () => {
  const img_styles = {
    width: "50%",
    height: "auto"
  }
  const { name } = useParams();
  return (
    <>
    {
      dogs.filter((dog) => dog.name === name).map((dog) => (
          <div className="w3-margin ">
            <h3>{dog.name}</h3>
            <img style={img_styles} src={dog.src} alt="woof woof" />
            <div>
              <h5>{dog.name} Facts</h5>
              <ul>
                {
                  dog.facts.map(fact => (
                    <li>{fact}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
    }
      <Link to='/'>
        <div className="w3-btn w3-ripple w3-text-blue">
          <i>back</i>
        </div>
      </Link>
    </>
  )
}

export default Doginfo;
