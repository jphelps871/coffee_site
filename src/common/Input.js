import PropTypes from 'prop-types';

export default function Input({ name, onInputChange }) {
  const handleChange = ({ target }) => {
    onInputChange(target);
  };

  return (
    <div className="input-feild">
      <label htmlFor={name}>{name}</label>
      <input name={name} type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
};
