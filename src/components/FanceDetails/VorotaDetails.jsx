import React from "react";

const VorotaDetails = ({ vorotaData }) => {
  return (
    <div className="fence__complect">
      <table className="fence__table table-bordered">
        <caption className="table__title">
          <strong>{vorotaData.title}</strong>
        </caption>
        <thead className="table__title">
          <tr>
            <th>КОМПЛЕКТАЦИЯ</th>
            <th>ВЫСОТА</th>
            <th>КАРКАС</th>
            <th>ПРОФНАСТИЛ RAL</th>
          </tr>
        </thead>
        <tbody>
  {vorotaData.rows.map((row, index) => (
    <React.Fragment key={index}>
      <tr>
        <td rowSpan={2}>
          <ul className="table__list">
            {row.components.map((component, componentIndex) => (
              <li key={componentIndex}>{component}</li>
            ))}
          </ul>
        </td>
        <td rowSpan={2}  style={{ minWidth: '92px', textAlign: "center"  }}>{row.height}</td>
        <td rowSpan={2} style={{ textAlign: "center" }}>{row.frame}</td>
        <td rowSpan={2} style={{ textAlign: "center" }}>
          <strong>{row.price}</strong>
        </td>
      </tr>
      <tr />
    </React.Fragment>
  ))}
</tbody>
        <tfoot>
          <tr>
            <td colSpan="3">&nbsp;</td>
            <td>
              <em>*цена указана с учетом монтажа, (длина ворот до 4 м.п.)</em>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VorotaDetails;
