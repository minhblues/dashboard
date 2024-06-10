interface LogoOnlyLayoutProps {
  children: React.ReactNode;
}

const LogoOnlyLayout = ({ children }: LogoOnlyLayoutProps) => {
  return <div>{children}</div>;
};

export default LogoOnlyLayout;
