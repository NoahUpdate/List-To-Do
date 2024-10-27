export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-custom w-11/12 h-[604px] rounded-2xl
      flex flex-col leading-[1.1] gap-3 p-3 border-custom-xlight border-[3px] sm:w-[414px]"
    >
      {children}
    </div>
  );
};
