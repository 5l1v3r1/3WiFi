ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 3
        }),
        objectManager = new ymaps.ObjectManager({
            // ����� ����� ������ ����������������, ���������� �����.
            clusterize: true,
            // ObjectManager ��������� �� �� �����, ��� � �������������.
            gridSize: 128
        });

    // ����� ������ ����� ��������� �������� � ���������,
    // ��������� � �������� ���������� ObjectManager.
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}