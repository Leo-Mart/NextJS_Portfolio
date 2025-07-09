interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
};

export default Container;
