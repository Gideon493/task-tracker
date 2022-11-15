const Button = ({ handleShowtask }) => {
  return (
    <div>
      <button
        onClick={handleShowtask}
        className=" px-6 bg-red-400 py-2 rounded-md hover:scale-105 duration-200"
      >
        Add task
      </button>
    </div>
  );
};

export default Button;
