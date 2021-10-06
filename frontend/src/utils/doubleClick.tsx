let timer: any;

export const DoubleClick = ({
  onClick = () => {},
  onDoubleClick = () => {},
  //@ts-ignore
  children,
}) => {
  const onClickHandler = (event: any) => {
    clearTimeout(timer);
    if (event.detail === 1) {
      timer = setTimeout(onClick, 200);
    } else if (event.detail === 2) {
      onDoubleClick();
    }
  };

  return <div onClick={onClickHandler}>{children}</div>;
};
