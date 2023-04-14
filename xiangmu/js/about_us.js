var map = new BMapGL.Map('container');
var point = new BMapGL.Point(113.99749, 33.071643);
map.centerAndZoom(point, 15);
// 创建点标记
var marker = new BMapGL.Marker(point);
map.addOverlay(marker);
// 创建信息窗口
var opts = {
    width: 200,
    height: 100,
    title: '驻马店幼儿师范高等专科学校'
};
var infoWindow = new BMapGL.InfoWindow('地址：驻马店市盘龙山路2658号', opts);
// 点标记添加点击事件
marker.addEventListener('click', function () {
    map.openInfoWindow(infoWindow, point); // 开启信息窗口
});

  // GL版命名空间为BMapGL
    // 按住鼠标右键，修改倾斜角和角度
	// var map = new BMapGL.Map("container");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(113.99749, 33.071643), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
    map.addControl(navi3DCtrl);

      // 创建定位控件
      var locationControl = new BMapGL.LocationControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        // 控件基于停靠位置的偏移量（可选）
        offset: new BMapGL.Size(20, 20)
    });
    // 将控件添加到地图上
    map.addControl(locationControl);

    // 添加定位事件
    locationControl.addEventListener("locationSuccess", function(e){
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("113.99749, 33.071643" + address);
    });
    locationControl.addEventListener("locationError",function(e){
        alert(e.message);
    });

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    map.addControl(zoomCtrl);


    map.centerAndZoom(new BMapGL.Point(113.99749, 33.071643), 11);
    // 创建城市选择控件
    var cityControl = new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // 控件基于停靠位置的偏移量（可选）
        offset: new BMapGL.Size(10, 5)
    });
    // 将控件添加到地图上
    map.addControl(cityControl);