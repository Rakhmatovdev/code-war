import React from "react";
import user from "../../components/icons/user.png"; // Import default avatar image

interface Player {
    name: string;
    avatar?: string; // Make avatar optional
    health: number; // 0–3
    damage: number; // negative or positive points
}

interface FightCardProps {
    leftPlayer: Player;
    rightPlayer: Player;
    time: string;
    status?: 'waiting' | 'active' | 'completed'; // Optional status prop
}

const HealthBar = ({ health }: { health: number }) => {
    return (
        <div className="flex gap-1 mt-2">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                        i <= health ? "bg-green-500" : "bg-red-500"
                    }`}
                />
            ))}
        </div>
    );
};

const PlayerCard = ({ player }: { player: Player }) => {
    const damageColor = player.damage >= 0 ? "text-green-400" : "text-red-400";

    return (
        <div className="flex flex-col items-center text-white w-1/3 px-2">
            <div className="text-sm sm:text-base font-medium truncate max-w-full">
                {player.name}
            </div>
            <img
                src={player.avatar || user}
                alt={`${player.name}'s avatar`}
                className="w-10 h-10 sm:w-14 sm:h-14 mt-2 rounded-full object-cover border-2 border-white/30"
            />
            <HealthBar health={player.health} />
            <div className={`mt-1 text-sm sm:text-base font-bold ${damageColor}`}>
                {player.damage > 0 ? `+${player.damage}` : player.damage} ball
            </div>
        </div>
    );
};

const FightCard: React.FC<FightCardProps> = ({
                                                 leftPlayer,
                                                 rightPlayer,
                                                 time,
                                                 status = 'active'
                                             }) => {
    const statusColor = {
        waiting: "from-yellow-500 via-gray-500 to-yellow-500",
        active: "from-red-500 via-gray-500 to-green-500",
        completed: "from-purple-500 via-gray-500 to-purple-500"
    };

    return (
        <div className="mb-4">
            <div className={`bg-gradient-to-r ${statusColor[status]} rounded-2xl p-4 flex justify-between items-center mx-4 sm:mx-16 border border-white/20 shadow-lg`}>
                <PlayerCard player={leftPlayer} />

                <div className="flex flex-col items-center text-white w-1/3 px-2">
                    <div className="text-2xl sm:text-3xl mb-1">⚔️</div>
                    <div className="text-xs sm:text-sm bg-black/30 px-2 py-1 rounded">
                        <span className="hidden sm:inline">Time: </span>
                        {time}
                    </div>
                    {status !== 'active' && (
                        <div className="text-xs mt-1 uppercase font-bold bg-white/20 px-2 py-0.5 rounded">
                            {status}
                        </div>
                    )}
                </div>

                <PlayerCard player={rightPlayer} />
            </div>

            <hr className="h-px border-none bg-white/20 sm:mx-16 mx-4 my-2" />
        </div>
    );
};

export default FightCard;