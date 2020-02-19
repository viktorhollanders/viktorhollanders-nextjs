import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/photos">
        <a>photos</a>
      </Link>

      <style jsx>{`
        * {
          font-family: -apple-system;
        }

        .nav {
          margin: 20px 3% 0 3%;
        }

        a {
          color: black;
          margin-right: 15px;
          text-decoration: none;

          hover: pointer;
        }

        a:hover {
          color: #5800bd;
        }
      `}</style>
    </div>
  );
}
