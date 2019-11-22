import React from "react";

function BoxButtons() {
  return (
    <div>
      <h3>Margin Toggles</h3>
      <h4>Multiple Margins</h4>
      <div className="btn-group" role="group" aria-label="Multiple Margins">
        <button type="button" className="btn btn-secondary tgl-m border-left">All</button>
        <button type="button" className="btn btn-secondary tgl-mx border-left">X-axis</button>
        <button type="button" className="btn btn-secondary tgl-my border-left">Y-axis</button>
      </div>
      <h4>Individual Margins</h4>
      <div className="btn-group" role="group" aria-label="Individual Margins">
        <button type="button" className="btn btn-secondary tgl-mt border-left">margin-top</button>
        <button type="button" className="btn btn-secondary tgl-mr border-left">margin-right</button>
        <button type="button" className="btn btn-secondary tgl-mb border-left">margin-bottom</button>
        <button type="button" className="btn btn-secondary tgl-l border-left">margin-left</button>
      </div>
      <h3>Borders</h3>
      <div className="btn-group" role="group" aria-label="Borders">
        <button type="button" className="btn btn-secondary border-left">Left</button>
        <button type="button" className="btn btn-secondary border-left">Middle</button>
        <button type="button" className="btn btn-secondary border-left">Right</button>
        <button type="button" className="btn btn-secondary border-left">Right</button>
      </div>
      <h3>Padding</h3>
      <div className="btn-group" role="group" aria-label="Padding">
        <button type="button" className="btn btn-secondary border-left">Left</button>
        <button type="button" className="btn btn-secondary border-left">Middle</button>
        <button type="button" className="btn btn-secondary border-left">Right</button>
        <button type="button" className="btn btn-secondary border-left">Right</button>
      </div>
    </div>
  )
}

export default BoxButtons;