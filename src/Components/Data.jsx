import React from 'react';

const Data = (props) => {
    let Temp
    if(props.unit==='℃')
        {
            Temp=props.Temp;
        }
    else{
        Temp = Math.round((props.Temp * 1.8) + 32);
    }
    return (
        <React.Fragment>
            <div className="row city mt-5">
                <p className="col-lg-12">{`${props.city} , ${props.country}`}</p>
            </div>

            <div className="row temperature mt-4">
                <p className="col-lg-12">{`${Temp} ${props.unit}`}  {`${props.stateName}`}</p>
            </div>
        </React.Fragment>
      );
}
 
export default Data;