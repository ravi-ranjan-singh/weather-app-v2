import React from 'react';

const Choice = (props) => {
    return ( 
        <React.Fragment>
            <div className="choice">
                <p className="col-lg-12">
                <span className={props.unit==='℃'?'C selected':'C'}

                onClick={()=>{props.onUnitChange('℃')}}>℃</span>/
                <span className={props.unit==='℉'?'F selected':'F'}  onClick={()=>{props.onUnitChange('℉')}}>℉</span></p>
            </div>
        </React.Fragment>
     );
}
 
export default Choice;