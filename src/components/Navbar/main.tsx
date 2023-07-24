import NavigationHeader from "./Navbar";

export default function Main(props: any) {
  return (
    <>
      <NavigationHeader />
      <div className="mt-24 max-w-screen-2xl mx-auto">{props.children}</div>
    </>
  );
}