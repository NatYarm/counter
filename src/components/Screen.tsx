type PropsType = {
  children: React.ReactNode;
};

const Screen = ({ children }: PropsType) => {
  return <div className="container">{children}</div>;
};

export default Screen;
