import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="text-3xl h-screen flex items-center justify-center">
      <Spinner />
      loading about..
    </div>
  );
}

export default loading;
