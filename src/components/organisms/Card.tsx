export const Card = ({ children }) => {
  return (
    <div
      className="bg-custom w-[414px] h-[604px] rounded-[32px]
      flex flex-col leading-[1.1] gap-3 p-3 border-custom-xlight border-[3px]"
    >
      {children}
    </div>
  );
};
