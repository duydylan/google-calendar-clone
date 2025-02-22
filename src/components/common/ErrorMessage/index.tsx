interface ErrorMessageProps {
  children: string;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="text-sm text-red-500">{children}</p>;
}

export default ErrorMessage;
