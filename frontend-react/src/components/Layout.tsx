export interface LayoutProps {}

export const Layout: React.FunctionComponent = (
  props: React.PropsWithChildren<LayoutProps>
) => {
  return <div className="p-2 mx-auto max-w-screen-md">{props.children}</div>;
};
