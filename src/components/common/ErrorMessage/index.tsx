interface IErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: IErrorProps) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-2xl">Error</div>
      <div className="text-lg">{message}</div>
    </div>
  );
};

export default ErrorMessage;
