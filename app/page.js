import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" style={{ fontSize: "18px", textDecoration: "none" }}>
          Week 2 Assignment
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
