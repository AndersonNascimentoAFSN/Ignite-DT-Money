import { useNavigate } from "react-router-dom";

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary?: () => void;
};

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  const navigate = useNavigate();

  const handlePushToHome = () => {
    navigate("/");
  };
  return (
    <div role="alert">
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>

        <button onClick={resetErrorBoundary || handlePushToHome}>
          Try again
        </button>
      </div>
    </div>
  );
}
