import React from "react";

export default function Card(props) {
  const styles = {
    color: {
      backgroundColor: props.color,
      width: '250px',
      height: '3px'
    }
  };

  return (
    <div className="card">
      <div style={styles.color}></div>
      <h3>{props.name}</h3>
      <h6>{props.description}</h6>
      <img src={`../images/${props.img}`} alt="" />
    </div>
  );
}





