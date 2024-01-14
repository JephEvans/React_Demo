import "./App.css";
import { characters } from "./MarvelData";
import { churchLegends } from "./MyData";

function App() {
  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">Benedictions</h1>
        <input placeholder="Search a Marvel Character" className="topInput" />
      </div>
      <div className="cardBody">
        {churchLegends.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="legendImage" src={data.image} alt={data.name} />
              <h2>{data.name}</h2>
              <p className="description">
                {data.uniqueness}
              </p>
              <div className="legendInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{data.time}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Home: {data.country}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


//this is a comment
// function App() {
//   return (
//     <div className="mainBody">
//       <div className="topHeader">
//         <h1 className="header">The Legends</h1>
//         <input placeholder="Search a Marvel Character" className="topInput" />
//       </div>
//       <div className="cardBody">
//         {characters.map((data, index) => (
//           <div key={index} className="card">
//             <div className="main">
//               <img className="avatarImage" src={data.img1} alt={data.alias} />
//               <h2>{data.alias}</h2>
//               <p className="description">
//                 {data?.abilities[0]}
//                 <br />
//                 {data?.abilities[1]}
//                 <br />
//                 {data?.abilities[2]}
//               </p>
//               <div className="avatarInfo">
//                 <div className="price">
//                   <ins>◘</ins>
//                   <p>{data.team}</p>
//                 </div>
//                 <div className="duration">
//                   <ins>◷</ins>
//                   <p>Home: {data.homeworld}</p>
//                 </div>
//               </div>
//               <hr />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
