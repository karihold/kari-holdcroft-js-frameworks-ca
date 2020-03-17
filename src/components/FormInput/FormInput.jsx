import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, error, register }) => {
  const [isValid, setIsValid] = useState(false);
  const [hasFirstError, setHasFirstError] = useState(false);
  useEffect(
    p => {
      if (!hasFirstError && error) return setHasFirstError(true);

      setIsValid(hasFirstError && !error);
    },
    [hasFirstError, error]
  );

  return (
    <label className="form-label">
      {label}
      {error && <p className="validation-error">{error}</p>}
      {isValid && <p className="validation-success">{`${label} is valid.`}</p>}
      <input type={type || 'text'} name={name} ref={register} />
    </label>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func
};

export default FormInput;
