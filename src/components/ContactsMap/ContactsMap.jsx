import React, { useEffect, useState } from 'react';
import { load } from '@2gis/mapgl';

const WidgetComponent = () => {
  const [mapglAPI, setMapglAPI] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWidget() {
      try {
        const api = await load();
        setMapglAPI(api);
      } catch (err) {
        setError(err);
      }
    }

    loadWidget();
  }, []);

  if (error) {
    return (
      <div>
        <p>Ошибка при загрузке виджета: {error.message}</p>
      </div>
    );
  }

  if (!mapglAPI) {
    return <div>Загрузка виджета...</div>;
  }

  return (
<div className="contacts__map">
      <a className="dg-widget-link" href="http://2gis.ru/barnaul/firm/70000001086729459/center/83.75440120697021,53.33505026385852/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
        Посмотреть на карте Барнаула
      </a>

      <div className="dg-widget-link">
        <a href="http://2gis.ru/barnaul/firm/70000001086729459/photos/70000001086729459/center/83.75440120697021,53.33505026385852/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">
          Фотографии компании
        </a>
      </div>

      <div className="dg-widget-link">
        <a href="http://2gis.ru/barnaul/center/83.754403,53.334809/zoom/16/routeTab/rsType/bus/to/83.754403,53.334809╎Забор у дома?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
          Найти проезд до Забор у дома
        </a>
      </div>

      <noscript style={{ color: '#c00', fontSize: '16px', fontWeight: 'bold' }}>
        Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
      </noscript>
    </div>
  );
};

export default WidgetComponent;
