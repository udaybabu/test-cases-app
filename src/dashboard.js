import React, { useState } from 'react';

const Dashboard = () => {
    const [place, setPlace] = useState("");
    const actionHandler = () => {

    }
   return(<>
       <div>
          <input type='text' placeholder='Enter place' data-testid="place-id" value={place} onChange={(e) => setPlace(e.target.value)}/>
          <button onClick={actionHandler} data-testid="btn-action">Action</button>
       </div>
   </>)
}
export default Dashboard;