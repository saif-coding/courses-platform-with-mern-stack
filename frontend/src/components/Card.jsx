const Card = ({ title, value, color }) => {
  return (
    <div className={`rounded-lg shadow-md p-4 text-white ${color}`}>
      <h4 className="text-lg">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
