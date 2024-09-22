function PresidentCard({ president }) {
  return (
    <div className={`mx-4 text-center`}>
      <img
        src={president.image}
        alt={president.name}
        className="w-64 h-64 object-cover rounded-lg shadow-xl"
      />
      <p className="text-xl font-semibold mt-4 text-white">{president.name}</p>
    </div>
  );
}

export default PresidentCard;
