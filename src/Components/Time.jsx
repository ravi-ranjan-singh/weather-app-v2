import React from 'react';
const Time = (props) => {
    let createdTime ; 
        createdTime =new Date(props.rise);
    let riseTime = `${createdTime.getHours()<9? '0'+createdTime.getHours():createdTime.getHours()}:${createdTime.getMinutes()<=9? '0'+createdTime.getMinutes():createdTime.getMinutes()} `;
    createdTime =new Date(props.set);
    let setTime = `${createdTime.getHours()<9? '0'+createdTime.getHours():createdTime.getHours()}:${createdTime.getMinutes()<=9? '0'+createdTime.getMinutes():createdTime.getMinutes()} `;
    return (  
        <React.Fragment>
             <div className="row time mt-5">
                    <p className="col-lg-12">
                        <span className="sunrise mr-5"><ion-icon name="sunny"></ion-icon> {riseTime}</span>
                        <span className="sunset ml-5"><ion-icon name="moon"></ion-icon> {setTime}</span>
                    </p>
            </div>
        </React.Fragment>
    );
}
 
export default Time;