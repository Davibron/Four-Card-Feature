import React from "react";

export default function Card(props) {
  const styles = {
    color: {
      backgroundColor: props.color,
      width: '290px',
      height: '3px',
      marginBottom: '10px',
      borderRadius: '50px 50px 0px 0px'
    }
  };

  return (
    <div className={`card ${props.name.replace(/\s+/g, "-").toLowerCase()}`}>
      <div style={styles.color}></div>
      <h3>{props.name}</h3>
      <h6>{props.description}</h6>
      <div className="img-container">
        <img src={`../images/${props.img}`} alt="" />
      </div>
    </div>
  );
}
