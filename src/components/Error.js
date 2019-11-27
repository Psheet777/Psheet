import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div>
      {props.errorMessage !== null && <p className="error__info">{props.errorMessage}</p>}
    </div>
  )
}
export default ErrorMessage;