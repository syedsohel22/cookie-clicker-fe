const Counter = ({ clicks, bonusPoints, prizes, handleClick, message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(246,209,183)] p-5">
      {message && (
        <div className="mt-3 p-2 bg-green-500 text-white rounded-md">
          {message}
        </div>
      )}
      <h1 className="mt-3 text-3xl font-bold mb-4 ">Cookie Clicker Game 🍪</h1>
      <p className="text-lg">
        Clicks: <span className="font-bold">{clicks}</span>
      </p>
      <p className="text-lg">
        Bonus Points: <span className="font-bold">{bonusPoints}</span>
      </p>
      <p className="text-lg">
        Prizes: <span className="font-bold">{prizes}</span>
      </p>

      <button onClick={handleClick} className="mt-4 px-6 py-3 ">
        <div className="w-52 h-52 bg-[rgb(210,105,30)] rounded-full cursor-pointer transition-transform duration-100 ease-in-out active:scale-90 shadow-lg relative flex justify-center items-center">
          <div className="absolute w-5 h-5 bg-[rgb(101,67,33)] rounded-full top-8 left-12"></div>
          <div className="absolute w-6 h-6 bg-[rgb(121,84,47)] rounded-full top-12 right-10"></div>
          <div className="absolute w-5 h-5 bg-[rgb(101,67,33)] rounded-full bottom-8 left-16"></div>
          <div className="absolute w-4 h-4 bg-[rgb(101,67,33)] rounded-full bottom-10 right-16"></div>
          <div className="absolute w-6 h-6 bg-[rgb(101,67,33)] rounded-full bottom-5 left-6"></div>
          <div className="absolute w-5 h-5 bg-[rgb(101,67,33)] rounded-full top-16 left-20"></div>
          <div className="absolute w-4 h-4 bg-[rgb(101,67,33)] rounded-full top-5 right-6"></div>
        </div>
      </button>
    </div>
  );
};

export default Counter;
