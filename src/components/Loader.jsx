
export const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <div>
      <svg 
      className='ml-12'
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{  display: 'block', shapeRendering: 'auto' }}
      >
        <g>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.5s" values="95;35" keyTimes="0;1" begin="-0.67s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.5s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s" />
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.5s" values="95;35" keyTimes="0;1" begin="-0.33s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.5s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s" />
          </circle>
          <circle cx="60" cy="50" r="4" fill="#e15b64">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.5s" values="95;35" keyTimes="0;1" begin="0s" />
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.5s" values="0;1;1" keyTimes="0;0.2;1" begin="0s" />
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a" transform="rotate(90 50 50)" />
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" />
          </path>
          <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" />
          </path>
        </g>
      </svg>
      </div>
      <div className='font-extrabold'>Loading...</div>
    </div>
  );
}