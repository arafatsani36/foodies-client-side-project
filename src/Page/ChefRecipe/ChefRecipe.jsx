import { Link} from 'react-router-dom';

const ChefRecipe = ({chef}) => {
   

    return (
        <div>
            <div className="card" >
          <img src={chef.image_url} alt="" />
        <div className="card-body">
           <img className='img-fluid'  src={chef.chefPicture} alt="" />
            <h5 className="card-title mt-2">{chef.chefName}</h5>
            <p className="card-text">Experience: {chef.yearsOfExperience}</p>
            <div className='d-flex justify-content-between'>
                <div>
                    <p className="card-text">Total Recipes:{chef.numOfRecipes}</p>
                </div>
                <div>
                    <p className="card-text">Total Likes:{chef.likes} </p>
                </div>
                
            </div>

            <Link className="btn btn-outline-dark mt-4" to={`/singlechef/${chef.id}`}>View Recipes Button</Link> 
        </div> 
        </div>
        </div>
    )
};

export default ChefRecipe;