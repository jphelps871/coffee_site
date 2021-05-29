import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Input({ name, onInputChange }) {
  const { error, status } = useSelector((state) => state.form);

  const filteredErrors = () => {
    return error.filter((message) => message.param === name);
  };

  const stlyeFilteredErrors = () => {
    if (status === '' || status === 'loading') return;
    return filteredErrors().length !== 0
      ? { borderColor: 'red' }
      : { borderColor: 'green' };
  };

  const handleChange = ({ target }) => {
    onInputChange(target);
  };

  return (
    <div className="input-feild">
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        type="text"
        onChange={(e) => handleChange(e)}
        style={stlyeFilteredErrors()}
      />
      {filteredErrors().length !== 0 ? (
        filteredErrors().map((message, index) => (
          <p key={index}>{message.msg}</p>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
};
