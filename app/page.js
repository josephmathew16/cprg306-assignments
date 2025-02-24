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
      <p>
        <Link href="/week-3" style={{ fontSize: "18px", textDecoration: "none" }}>
          Week 3 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-4" style={{ fontSize: "18px", textDecoration: "none" }}>
          Week 4 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-5" style={{ fontSize: "18px", textDecoration: "none" }}>
          Week 5 Assignment
        </Link>
      </p>
    </div>
  );
};

export default HomePage;