import React from 'react';
import { PIECE_COLORS } from '../utils/constants';

interface NextPiecesProps {
  pieces: number[][][];
}

const NextPieces: React.FC<NextPiecesProps> = ({ pieces }) => (
  <div className="mystical-panel p-4">
    <h3 className="pixel-text text-lg mb-4 text-pink-200">Next Pieces</h3>
    <div className="space-y-4">
      {pieces.map((piece, index) => (
        <div key={index} className="grid gap-1">
          {piece.map((row, y) => (
            <div key={y} className="flex gap-1">
              {row.map((cell, x) => {
                const colorClass = cell ? PIECE_COLORS[Object.keys(PIECE_COLORS)[cell - 1] as keyof typeof PIECE_COLORS] : 'bg-transparent';
                return (
                  <div
                    key={`${x}-${y}`}
                    className={`w-4 h-4 rounded-sm ${colorClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default NextPieces;