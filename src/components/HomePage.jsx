import PropTypes from "prop-types";

function HomePage({ setUser, setRoute, timer }) {
  return (
    <>
      <label htmlFor="user-input" className=" mt-2">
        Players name
      </label>
      <input
        className=" m-2 rounded-md"
        type="text"
        id="user-input"
        minLength={"2"}
        placeholder="Add name or initials"
        onBlur={(e) => {
          console.log(e.target.value);
          setUser(e.target.value);
        }}
      />
      <button
        className=" my-6 rounded-md bg-yellow-200 p-2"
        onClick={() => {
          setRoute((prev) => !prev);
        }}
      >
        Start
      </button>
      <div>{timer}</div>
    </>
  );
}

HomePage.propTypes = {
  setUser: PropTypes.func.isRequired,
  setRoute: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};

export default HomePage;
