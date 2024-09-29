import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
