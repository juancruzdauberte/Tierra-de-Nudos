import { ClipLoader } from "react-spinners";

export const LoadingWidget = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <ClipLoader size={45} speedMultiplier={1} /> <p>{text}</p>
    </div>
  );
};
