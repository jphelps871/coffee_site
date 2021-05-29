export default function Button({ submit, information }) {
  return <button onClick={() => submit}>{information}</button>;
}
