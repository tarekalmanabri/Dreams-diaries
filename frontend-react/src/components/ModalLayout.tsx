import React, { FC } from "react";
import { Layout, LayoutProps } from "./Layout";

export const ModalLayout: FC = (
  props: React.PropsWithChildren<LayoutProps>
) => {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          {props.children}
        </div>
      </div>
    </Layout>
  );
};
