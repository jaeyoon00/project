import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { playerListState } from "../state/playerState";
import { getImage } from "../utils/imageUtil";

function PlayerDetailPage() {
  const { playerId } = useParams();
  const players = useRecoilValue(playerListState);
  const player = players.find((player) => player.id === playerId);

  function PlayerPosition({ position }) {
    let positionName;
    if (position === 1) {
      positionName = "스트라이커";
    } else if (position === 2) {
      positionName = "미드필더";
    } else if (position === 3) {
      positionName = "수비수";
    } else if (position === 4) {
      positionName = "골키퍼";
    } else {
      positionName = "Unknown";
    }
    return <h1>{positionName}</h1>;
  }

  return (
    <div
      className="text-white flex pt-20 px-20 items-center justify-center pt-28 pb-12"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/back.jpg)`,
        height: "calc(100% - 128px)",
      }}

      // style={{
      //   backgroundImage: `url('C:\\Users\\Playdata\\Desktop\\Cover.jpg');`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   alignItems: "center",
      // }}
    >
      {/* <img src={`${process.env.PUBLIC_URL}/images/back.jpg`} /> */}
      <div
      // className=" left-2 bottom-2 mb-3 ml-5"
      >
        <div className="mx-10">
          <p className="font-bold text-5xl">
            {player.number} {player.name}
          </p>
          <br></br>
          <h1 className="font-sans">{"나이 : " + player.age + "년생"}</h1>
          <br></br>
          <h1 className="font-sans">{"주발 : " + player.mainFoot}</h1>
          <br></br>
          <h1 className="font-sans">
            <PlayerPosition position={player.position} />
          </h1>
        </div>
      </div>
      <div
        className="flex justify-center items-center"
        style={{ height: `calc(100vh - 390px)` }}
      >
        <div>
          <img src={getImage(player.id)} alt={player.name} />
        </div>
      </div>
      <div className="mx-20 font-sans text-lg">
        <h1>{"총 경기수 : " + player.totalGamesPlayed + "경기"}</h1>
        <br></br>
        <h1>{"총 골 : " + player.totalGoalsScored + "골"}</h1>
        <br></br>
        <h1>{"총 어시스트 : " + player.totalAssists + "어시"}</h1>
        <br></br>
        <h1>{"현재 골 : " + player.monthlyGoal + "골"}</h1>
        <br></br>
        <h1>{"현재 어시스트 : " + player.monthlyAssists + "어시"}</h1>
      </div>
    </div>
  );
}

export default PlayerDetailPage;
