import Nav from "../components/Nav";

export default function Photos() {
  return (
    <div>
      <Nav />
      <h1>Photos</h1>

      <style jsx>{`
        h1,
        p {
          font-family: -apple-system;
        }

        h1 {
          color: blue;
          font-wight: 800;
          text-align: center;
          margin-top: 120px;
        }
      `}</style>
    </div>
  );
}
