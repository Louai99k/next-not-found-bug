import Link from "next/link";

const MainPage = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link href="/franchising">next link</Link>
      <a href="/franchising"> normal anchor link </a>
    </div>
  );
};

export default MainPage;
