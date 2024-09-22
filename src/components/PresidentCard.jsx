function PresidentCard({ president }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const start = president.start.toLocaleDateString("en-US", options);
  const end = president.end
    ? president.end.toLocaleDateString("en-US", options)
    : "Present";

  return (
    <div className={`mx-4`}>
      <img
        src={president.image}
        alt={president.name}
        className="w-64 h-64 object-cover rounded-lg shadow-xl mx-auto"
      />
      <p className="text-xl font-semibold mt-4 text-white text-center">
        {president.name}
      </p>
      <p className="text-lg font-medium text-white text-center">
        {president.number}
      </p>
      <p className="text-lg font-medium text-white text-center">
        From {start} to {end}
      </p>
      <p className="text-lg font-medium text-white text-center">
        Party {president.party}
      </p>
    </div>
  );
}

export default PresidentCard;
