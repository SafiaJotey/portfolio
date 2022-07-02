const Button = ({ children }) => {
  return (
    <div>
      <button className="bg-secondary py-2 border-0 roundrd px-3 text-light rounded-2 mx-2">
        {children}
      </button>
    </div>
  );
};

export default Button;
