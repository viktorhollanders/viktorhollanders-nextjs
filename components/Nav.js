import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/photos">
        <a>Photos</a>
      </Link>

      <style jsx>{`
        div {
          margin: 20px 3% 0 3%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        a {
          color: black;
          margin-right: 15px;
          text-decoration: none;

          hover: pointer;
        }

        a:hover {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
