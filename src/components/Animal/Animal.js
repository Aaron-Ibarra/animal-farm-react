import './Animal.css';

export default function Animal(animal) {
  return (
    <div style={{ top: animal.top, left: animal.left }} className="animal">
      <img src={`animals/${animal.type}.svg`} alt={`${animal.type} image`}></img>
      <p className="name">{animal.name}</p>
      {animal.says}
    </div>
  );
}
