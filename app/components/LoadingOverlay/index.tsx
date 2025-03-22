import Spinner from "./Spinner";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-12 h-12 flex items-center justify-center animate-spinner-linear-spin">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingOverlay;
