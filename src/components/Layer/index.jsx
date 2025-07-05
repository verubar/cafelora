import './index.css';

export const Layer = ({layer}) => {
  return (
    <div className="layer">
        <div className="layer__color" style={{ backgroundColor: layer.color }}></div>
        <div className="layer__label">{layer.label}</div>
    </div>
  );
};