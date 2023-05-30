import { ReactElement, ReactNode } from "react";

const Error = ({ children }: { children: ReactNode | ReactElement }) => {
  return (
    <div className="bg-red-600 text-white text-center p-1 rounded-md uppercase font-bold mb-3 ">
      {children}
    </div>
  );
};

export default Error;
