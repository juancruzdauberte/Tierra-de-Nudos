import { ClipLoader } from "react-spinners";

type Props = {
  text: string;
};
export const LoadingWidget = ({ text }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <ClipLoader size={45} speedMultiplier={1} /> <p>{text}</p>
    </div>
  );
};
