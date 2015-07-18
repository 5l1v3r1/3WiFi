ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 18
        }),
		
		loadingObjectManager = new ymaps.LoadingObjectManager('getmap.php?bbox=%b',
		{   
			// �������� �������������.
			clusterize: true,
			// ����� ��������� �������� � ��������� cluster.
			clusterHasBalloon: false,
			// ����� �������� �������� � ��������� geoObject
			geoObjectOpenBalloonOnClick: false
		});

	myMap.geoObjects.add(loadingObjectManager);
};