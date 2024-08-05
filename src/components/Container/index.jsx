export const Container = (props) => {
  return (
    <div className="flex py-0 px-5 my-0 mx-auto max-w-[1200px] w-full">
      {props.children}
    </div>
  );
};
