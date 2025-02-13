function Arrow({ color = "#E5E5E5" }: { color?: string }) {
  return (
    <svg
      width="56"
      height="51"
      viewBox="0 0 56 51"
      fill="none"
      className="arrow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arrow-path"
        d="M0.99994 15.3209C30.2399 13.2956 44.6345 39.9304 47.993 44.5548"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="1.01087"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset="100"
      />
      <path
        className="arrow-path"
        d="M53.5986 33.3483C49.9756 40.6833 48.0834 44.447 47.9218 44.6396C47.6794 44.9285 41.6677 43.3306 37.095 44.7306"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="1.01087"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        strokeDashoffset="100"
      />
    </svg>
  );
}

export default Arrow;
