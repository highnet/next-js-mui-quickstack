type PageLayoutProps = {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

export default function PageLayout({ header, main, footer }: PageLayoutProps) {
  return (
    <>
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </>
  );
}
