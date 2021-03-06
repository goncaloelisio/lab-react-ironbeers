import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends Component {
  constructor(props){
    super(props);
    this.getAllBeers = this.getAllBeers.bind(this)
    this.state ={
        beers:[],
    }
 
}

getAllBeers() {
  axios.get(`https://ih-beers-api.herokuapp.com/beers`)
  .then(APIbeers => {
    this.setState({
      beers: APIbeers.data
    })
    console.log(this.state.beers)
  })
}

componentDidMount() {
  this.getAllBeers();
}

render(){
  return (
    <div>
        {
            this.state.beers.length === 0 &&
                <h1>Loading...</h1>
        }

      { this.state.beers.map( beer => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                  <div className="beers-card">
                    <div className="img-beer">
                      <img src={beer.image_url} />
                     </div> 
                  <div className="beer-info">
                  <h3>{beer.name}</h3>
                  <h5>{beer.tagline}</h5>
                  <p>{beer.contributed_by}</p>
                  </div>
                  </div>
                </Link>
              </div>
            )})
          }
    <h1>{this.state.beers.name}</h1>

    <Link to={'/'}>Back to home</Link>
  </div>
)
  }
}

export default ListBeers;