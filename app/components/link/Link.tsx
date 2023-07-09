export type LinkPropsType = {
  title: string;
};

export function Link({ title }: LinkPropsType) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
