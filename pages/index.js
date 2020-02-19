import Nav from "../components/Nav";
export default function Home() {
  const myTitle = "Viktor Hollanders";

  const houers = new Date().getHours();
  const minutes = new Date().getUTCMinutes();
  const time = `${houers}:${minutes}`;

  return (
    <div className="root">
      <head>
        <title>{myTitle}</title>
        <meta
          key="description"
          name="description"
          content="This is the personal website for Viktor hollanders showcasing his projects and photos."
        />
      </head>
      <Nav />
      <h1 className="title">{myTitle}</h1>

      <p className="about">
        My name is Viktor Hollanders and I am a develoer based in Reykjavik Iceland.
        Below are I have listed the porgramming languages and thecnologys I work with.
      </p>

      <ul>
        <li>HTML</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Next js</li>
        <li>React</li>
        <li>Git</li>
        <li>Command line</li>
        <li>Craft CMS</li>
      </ul>


      <div className="time">
        <p >The time here is</p>
        <h1>{time}</h1>
      </div>

      <style jsx>{` 


         * { 
          font-family: -apple-system;
          }

          h1 {
            color: blue;
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

          ul {
            list-style: none;
            font-weight: 600;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 2%;
          }

          li {
            color: blue;
            border: 1px solid blue;
            padding: 6px;
            border-radius: 5px;
            margin: 3px 7px 0 0;
          }

          li:hover {
            color: white;
            background-color: blue;
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
