import React from 'react';

const DetectionAnalysisCard = () => {
  // Sample data for the two lines - matched to reference image
  const lineData1 = [80, 90, 100, 100, 90, 70, 70, 70, 70];  // Teal line
  const lineData2 = [70, 75, 80, 75, 70, 45, 45, 45, 25];    // Gray line
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A'];
  
  // Create smooth curve using cubic bezier
  const createSmoothPath = (points: number[]) => {
    if (points.length < 2) return '';

    const path = points.reduce((acc, point, i, arr) => {
      const x = (i * 100) / (arr.length - 1);
      const y = 100 - point;

      if (i === 0) return `M ${x},${y}`;

      // Calculate control points for smoother curve
      const prevX = ((i - 1) * 100) / (arr.length - 1);
      const prevY = 100 - arr[i - 1];
      
      // Adjust tension for more natural curves
      const cp1x = prevX + (x - prevX) * 0.5;
      const cp2x = prevX + (x - prevX) * 0.5;
      
      return `${acc} C ${cp1x},${prevY} ${cp2x},${y} ${x},${y}`;
    }, '');

    return path;
  };

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-[#2CB8C6]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            Détéction et Analyse
          </h3>
        </div>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="p-4">
        <div className="relative h-[240px] bg-white rounded-lg mb-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {/* Graph area */}
          <div className="ml-8 h-full relative">
            {/* Grid lines - very light */}
            <div className="absolute inset-0">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute w-px h-full"
                  style={{ 
                    left: `${(index * 100) / 8}%`,
                    backgroundColor: 'rgba(0,0,0,0.05)'
                  }}
                />
              ))}
            </div>
            
            {/* Horizontal grid lines - very light */}
            <div className="absolute inset-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute w-full h-px"
                  style={{ 
                    top: `${(index * 100) / 4}%`,
                    backgroundColor: 'rgba(0,0,0,0.05)'
                  }}
                />
              ))}
            </div>

            {/* Graph lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* Line 2 (background) */}
              <path
                d={createSmoothPath(lineData2)}
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                opacity="0.5"
              />
              
              {/* Line 1 (foreground) */}
              <path
                d={createSmoothPath(lineData1)}
                fill="none"
                stroke="#2CB8C6"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />

              {/* Data points for line 2 */}
              {lineData2.map((point, index) => {
                const x = (index * 100) / (lineData2.length - 1);
                const y = 100 - point;
                return (
                  <circle
                    key={`point2-${index}`}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="2.5"
                    fill="white"
                    stroke="#9CA3AF"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                );
              })}

              {/* Data points for line 1 */}
              {lineData1.map((point, index) => {
                const x = (index * 100) / (lineData1.length - 1);
                const y = 100 - point;
                return (
                  <circle
                    key={`point1-${index}`}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="2.5"
                    fill="white"
                    stroke="#2CB8C6"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-400">
              {labels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center">
          Afficher Le rapport complet →
        </button>
      </div>
    </div>
  );
};

export default DetectionAnalysisCard;
