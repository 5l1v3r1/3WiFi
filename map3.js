ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 18
        }),
		
		remoteObjectManager = new ymaps.RemoteObjectManager('getmap.php?bbox=%b',
		{   
			// ����� ��������� �������� � ��������� cluster.
			clusterHasBalloon: false,
			// ����� �������� �������� � ��������� geoObject
			geoObjectOpenBalloonOnClick: false
		});

	myMap.geoObjects.add(remoteObjectManager);
};
