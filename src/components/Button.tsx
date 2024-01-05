type PropsType = {
  name: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const Button = ({ name, onClick, isDisabled }: PropsType) => {
  const btnClassName = `
	button
	${isDisabled ? 'disabled' : ''}
	`;
  return (
    <button className={btnClassName} onClick={onClick} disabled={isDisabled}>
      {name}
    </button>
  );
};

export default Button;
