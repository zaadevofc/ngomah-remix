
const ContainerHp = (props: any) => {
  return (
    <>
      <div className={`${props.className} flex mx-auto sm:max-w-sm`}>
        {props.children}
      </div>
    </>
  );
};

export default ContainerHp;
