import React from "react";

interface Player {
  name: string;
  avatar: string;
  health: number; // 0–3
  damage: number; // manfiy yoki musbat ball
}

interface FightCardProps {
  leftPlayer: Player;
  rightPlayer: Player;
  time: string;
}

const HealthBar = ({ health }: { health: number }) => {
  const maxHealth = 3;
  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: maxHealth }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-sm text-xs sm:text-base ${
            i < health ? "bg-green-500" : "bg-red-500"
          }`}
        />
      ))}
    </div>
  );
};

const PlayerCard = ({ player }: { player: Player }) => (
  <div className="flex flex-col items-center text-white w-1/3">
    <div className="text-xs sm:text-base">{player.name}</div>
    <img src={player.avatar} alt="avatar" className="w-8 h-8 mt-2" />
    <HealthBar health={player.health} />
    <div className="mt-1 text-xs sm:text-base">
      {player.damage > 0 ? `+${player.damage}` : player.damage} ball
    </div>
  </div>
);

const FightCard: React.FC<FightCardProps> = ({
  leftPlayer,
  rightPlayer,
  time,
}) => {
  return (
  <>  <div className="bg-gradient-to-r sm:mx-16 from-red-500 via-gray-500 to-green-500 rounded-2xl p-4 flex justify-between items-center  mx-4 border border-white/20 shadow-lg">
      <PlayerCard player={leftPlayer} />
      <div className="flex flex-col items-center text-white text-sm w-1/3">
        <div className="text-xl sm:text-2xl">⚔️</div>
        <div className="mt-2 text-xs sm:text-base" ><span className="hidden sm:inline">time:</span> {time}</div>
      </div>
      <PlayerCard player={rightPlayer} />
    </div>
      <hr className="h-px border-none bg-[#FFFFFF] sm:mx-16 mx-4 my-2"/>
 </> );
};

export default FightCard;
