import Nav from "../components/Nav";
import Head from "next/head"

export default function Home() {
  const myTitle = "Viktor Hollanders";

  const houers = new Date().getHours();
  const minutes = new Date().getUTCMinutes();
  const time = `${houers}:${minutes}`;

  return (
    <div>
      <Head>
        <meta
          key="description"
          name="description"
          content="This is the personal website for Viktor hollanders showcasing his projects and photos."
        />
      </Head>
      <header>
        <title>{myTitle}</title>
        <Nav />
        <h1 className="title">{myTitle}</h1>
      </header>



      <div>
        <p className="about">
          My name is Viktor Hollanders and I am a develoer based in Reykjavik Iceland.
          Below are I have listed the porgramming languages and thecnologys I work with.
      </p>


        <div className="time">
          <p >The time here is</p>
          <h1>{time}</h1>
        </div>
      </div>

      <style jsx>{`

        header {
          height: 80vh;
          background-color: #FFD100;
          padding-top: 10px;
        } 

          h1 {
            font-wight: 800;
            text-align: center; 
            margin: 0;
          }

          .title {
           margin-top: 120px;
          }

          p {
             line-height: 1.2;
             margin: 0;
          }

          .about {
            margin: 80px 0;
             padding: 2%;
          }

          .time {
            margin-top: 80px;
            margin-bottom: 30px;
             
          }

          .time p {
            text-align: center;
          }

          .time h1 {
            margin-top: 10px;
          }


        `}</style>
    </div>

  );
}
