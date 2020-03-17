import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, name, error, register }) => {
  const [isValid, setIsValid] = useState(false);
  const [hasFirstError, setHasFirstError] = useState(false);
  useEffect(() => {
    if (!hasFirstError && error) return setHasFirstError(true);

    setIsValid(hasFirstError && !error);
  }, [hasFirstError, error]);
  return (
    <label className="form-label">
      {label}
      {error && <p className="validation-error">{error}</p>}
      {isValid && <p className="validation-success">{`${label} is valid.`}</p>}
      <textarea name={name} ref={register} />
    </label>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func
};

export default TextArea;
