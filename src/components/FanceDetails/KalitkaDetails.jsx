import React from 'react';

const KalitkaDetails = ({ kalitkaData }) => {
  return (
    <div className="fence__complect">
      <table className="fence__table table-bordered">
        <caption className="table__title">
          <strong>{kalitkaData.title}</strong>
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
  {kalitkaData.rows.map((row, index) => (
    <React.Fragment key={index}>
      <tr>
        <td rowSpan={2}>
          <ul>
            {row.components.map((component, componentIndex) => (
              <li key={componentIndex}>{component}</li>
            ))}
          </ul>
        </td>
        <td rowSpan={2}>{row.height}</td>
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
              <em>*цена указана с учетом монтажа</em>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default KalitkaDetails;
