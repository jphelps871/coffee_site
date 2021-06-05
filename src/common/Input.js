import PropTypes from 'prop-types';

export default function Input({ onInputChange, server, type }) {
  const { error, status } = server;
  const { name, display } = type;

  const filteredErrors = () => {
    return error.filter((message) => message.param === name);
  };

  const stlyeFilteredErrors = () => {
    if (status === '' || status === 'loading') return;
    return filteredErrors().length !== 0
      ? { borderColor: 'tomato' }
      : { borderColor: 'green' };
  };

  const handleChange = ({ target }) => {
    onInputChange(target);
  };

  return (
    <div className="input-feild">
      <label htmlFor={name}>{display}</label>
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
