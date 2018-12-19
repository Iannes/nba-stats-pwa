import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const FetchData = (url) => {
  
  const [data, setData] = useState({ });
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';

  const combinedUrl = `${corsUrl}${url}`

  const myFetch = async () => {    
    const response = await axios(combinedUrl);
    await setData(response); 
    console.log(response)
    return response;      
  };

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <Fragment>
      {
         data.children
      }
    </Fragment>
  );
}

export default FetchData;