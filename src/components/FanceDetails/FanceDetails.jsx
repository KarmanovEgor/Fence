import React from 'react';

const FenceDetails = ({ fenceData, openPopup }) => {
  if (!fenceData || !fenceData.rows || fenceData.rows.length === 0) {
    return null; // Возвращаем null, если данные не доступны
  }

  const hasAdditionalOptions = fenceData.additionalOptions && fenceData.additionalOptions.length > 0;
  return (
    <div className="fence__complect">
      <table className="fence__table table-bordered">
        <caption className="table__title">
          <strong>{fenceData.title}</strong>
        </caption>
        <thead className="table__title">
          <tr>
            <th>КОМПЛЕКТАЦИЯ</th>
            <th>ВЫСОТА</th>
            <th>КАРКАС</th>
            <th>СТОИМОСТЬ</th>
          </tr>
        </thead>
        <tbody>
  {fenceData.rows.map((row, index) => (
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
      {hasAdditionalOptions && (
        <div className="fence__complect-plus">
          <h3 className="fence_complect-plus_title">Дополнительно под заказ:</h3>
          <ul className="fence_complect-plus_list">
            {fenceData.additionalOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="fence__complect-btn"
        type="button"
        name="calling"
        onClick={openPopup}
      >
        Заказать расчёт забора
      </button>
      
    </div>
  );
};

export default FenceDetails;
