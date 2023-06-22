import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsRecipe from '../../ChefsRecipe/ChefsRecipe';

const SingleChef = () => {
     const singleChefs = useLoaderData();
     console.log(singleChefs)
   

    //  console.log(singleChefs);
    return (
        
           <div>
              {
                   singleChefs.map(singleChef => <ChefsRecipe id="singleChef._id" singleChef={singleChef}></ChefsRecipe>) 
              } 
           </div>

        
    );
};

export default SingleChef;