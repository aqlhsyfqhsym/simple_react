  
export default function IconList({ icon, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
      </a>
    </div>
  );
}
