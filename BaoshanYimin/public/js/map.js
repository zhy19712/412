$(function(){
	var map = new BMap.Map("container");          // 创建地图实例  
	var point = new BMap.Point(116.403963,39.915119);  // 创建点坐标  
	map.centerAndZoom(point, 12);   //初始化地图，设置地图中心坐标和地图级别
	map.enableScrollWheelZoom();   //启用鼠标滚轮缩放
	map.setMinZoom(12);   //设置缩放最小级别
	var opts = {anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type: BMAP_NAVIGATION_CONTROL_ZOOM}        //右下方

	map.addControl(new BMap.NavigationControl(opts));                //平移缩放控件 默认左上角

	map.addControl(new BMap.ScaleControl(opts));                     //比例尺控件地图 默认左下方

	map.setCurrentCity("北京");

	//添加一级覆盖物
	function addLabelA(point,string){		
		var opts = {position:point,offset:new BMap.Size(0,-35)};    //定义位置及偏移量
		var label = new BMap.Label(string,opts);					//创建文本标注
		label.setStyle({											
			color:"#fff",
			backgroundColor:"transparent",
			borderColor:"transparent",
			width:"94px",
			height:"94px",
			lineHeight:"20px",
			textAlign:"center",
			paddingTop:"35px",
			cursor:"pointer",
			background:"url(./images/icon-green.png) no-repeat center center"
		});
		map.addOverlay(label);
		label.disableMassClear();										
		
		label.addEventListener("click",function(){
			map.centerAndZoom(point,14);
			// console.log(map.getOverlays())
		});
		label.addEventListener("mouseover",function (){
			console.log(map.getOverlays().length)
			map.clearOverlays();
			this.setStyle({background:"url(./images/icon-red.png) no-repeat center center"});
			var myGeo = new BMap.Geocoder();  
			myGeo.getLocation(point,function(result){
				var bdary = new BMap.Boundary();
				bdary.get(result.addressComponents.district,function(rs){
					var count = rs.boundaries.length;
					if(count === 0){
						alert('未能获取当前输入行政区域');
						return;
					}
					var pointArray = [];
					for(var i=0;i<count;i++){
						var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#46b171",fillColor:"#6df5a4"}); //建立多边形覆盖物
						map.addOverlay(ply);
						pointArray = pointArray.concat(ply.getPath());
					}
					
				}) 
			});
		});
		label.addEventListener("mouseout",function(){
			this.setStyle({background:"url(./images/icon-green.png) no-repeat center center"});
			
			map.clearOverlays();
		});		
	}


	//添加一级覆盖物所属区域
	// function addLabelAregion(point,id){
	// 	var myGeo = new BMap.Geocoder();  
	// 	myGeo.getLocation(point,function(result){
	// 		var bdary = new BMap.Boundary();
	// 		bdary.get(result.addressComponents.district,function(rs){
	// 			var count = rs.boundaries.length;
	// 			if(count === 0){
	// 				alert('未能获取当前输入行政区域');
	// 				return;
	// 			}
	// 			var pointArray = [];
	// 			for(var i=0;i<count;i++){
	// 				var ply = new BMap.Polygon(rs.boundaries[i],{strokeWeight: 2, strokeColor: "#46b171",fillColor:"#6df5a4"});
					
	// 				map.addOverlay(ply);
	// 				pointArray = pointArray.concat(ply.getPath());
	// 				ply.hide();
	// 			}
	// 			console.log(ply)
	// 		})
	// 	})
	// }	

	//添加二级覆盖物
	function addLabelB(point,string){		
		var opts = {position:point,offset:new BMap.Size(0,-35)};    //定义位置及偏移量
		var label = new BMap.Label(string,opts);					//创建文本标注
		label.setStyle({											
			color:"#fff",
			backgroundColor:"transparent",
			borderColor:"transparent",
			width:"94px",
			height:"94px",
			lineHeight:"20px",
			textAlign:"center",
			paddingTop:"35px",
			cursor:"pointer",
			background:"url(./images/icon-green.png) no-repeat center center"
		});
		map.addOverlay(label);
		label.disableMassClear();										
		
		label.addEventListener("click",function(){
			map.centerAndZoom(point,16)
		});
		label.addEventListener("mouseover",function (){
			this.setStyle({background:"url(./images/icon-red.png) no-repeat center center"})			
		});
		label.addEventListener("mouseout",function(){
			this.setStyle({background:"url(./images/icon-green.png) no-repeat center center"}) 
		});														
	}

	//添加三级覆盖物
	function addLabelC(point,string,price){		
		var opts = {position:point,offset:new BMap.Size(0,0)};    //定义位置及偏移量
		var label = new BMap.Label(string,opts);					//创建文本标注
		label.setStyle({
			color:"#fff",
			backgroundColor:"#000",
			borderColor:"transparent",
			padding:"0 5px",
			height:"25px",
			lineHeight:"20px",
			textAlign:"center",
			cursor:"pointer",
			background:"url(./images/c-green.png) no-repeat top left"			
		});										
		map.addOverlay(label);
		label.disableMassClear();
		label.addEventListener("click",function(){
			this.setContent(string+" | "+price);
		});
		label.addEventListener("mouseover",function (){
			this.setStyle({background:"url(./images/c-red.png) no-repeat top left"})

		});
		label.addEventListener("mouseout",function(){
			this.setStyle({background:"url(./images/c-green.png) no-repeat top left"}) 
		});														
	}

	//一级菜单位置													
	var pointA1 = new BMap.Point(116.405707,39.947897);   
	var pointA2 = new BMap.Point(116.350515,39.928423);   
	var pointA3 = new BMap.Point(116.555958,39.921469);   
	var pointA4 = new BMap.Point(116.30434,39.967074);   
	var pointA5 = new BMap.Point(116.292267,39.865692);   
	var pointA6 = new BMap.Point(116.197408,39.926839);   
	var pointA7 = new BMap.Point(116.63711,39.932574);   
	var pointA8 = new BMap.Point(116.34649,39.734715);


	


	 
	//二级菜单位置
	var pointB2_1 = new BMap.Point(116.564075,39.918545);   
	var pointB2_2 = new BMap.Point(116.596324,39.920074);
	var pointB2_3 = new BMap.Point(116.512099,39.926161);
	var pointB2_4 = new BMap.Point(116.536497,39.909863);

	//三级菜单位置
	var pointC2_3_1 = new BMap.Point(116.511878,39.921368);  
	var pointC2_3_2 = new BMap.Point(116.50442,39.917554);
	var pointC2_3_3 = new BMap.Point(116.523021,39.918089);
	var pointC2_3_4 = new BMap.Point(116.534499,39.919464);
	var pointC2_3_5 = new BMap.Point(116.539642,39.923435);
	var pointC2_3_6 = new BMap.Point(116.52408,39.923294);
	var pointC2_3_7 = new BMap.Point(116.514225,39.923952);
	var pointC2_3_8 = new BMap.Point(116.509104,39.924786);

	//一级菜单信息
	var labelA1 = addLabelA(pointA1,"东城<br>9.3万<br>1204套");     
	var labelA2 = addLabelA(pointA2,"西城<br>10.5万<br>1510套");
	var labelA3 = addLabelA(pointA3,"朝阳<br>6.7万<br>9453套");
	var labelA4 = addLabelA(pointA4,"海淀<br>8.2万<br>4112套");
	var labelA5 = addLabelA(pointA5,"丰台<br>5.5万<br>3154套");
	var labelA6 = addLabelA(pointA6,"石景山<br>5万<br>658套");
	var labelA7 = addLabelA(pointA7,"通州<br>4.7万<br>2098套");
	var labelA8 = addLabelA(pointA8,"大兴<br>4.0万<br>1896套");


	//一级菜单覆盖物所属区域

	// var addLabelAr1 = addLabelAregion(pointA1,0); 
	// var addLabelAr2 = addLabelAregion(pointA2,1); 
	// var addLabelAr3 = addLabelAregion(pointA3,2); 
	// var addLabelAr4 = addLabelAregion(pointA4,3); 
	// var addLabelAr5 = addLabelAregion(pointA5,4); 
	// var addLabelAr6 = addLabelAregion(pointA6,5); 
	// var addLabelAr7 = addLabelAregion(pointA7,6); 
	// var addLabelAr8 = addLabelAregion(pointA8,7);


	//二级菜单信息
	var labelB2_1 = addLabelB(pointB2_1,"传媒大学<br>10万<br>600套");   
	var labelB2_2 = addLabelB(pointB2_2,"管庄<br>6.6万<br>300套");
	var labelB2_3 = addLabelB(pointB2_3,"十里堡<br>8万<br>200套");
	var labelB2_4 = addLabelB(pointB2_4,"高碑店<br>12万<br>350套");

	//三级菜单信息
	var labelC2_3_1 = addLabelC(pointC2_3_1,"城市广场","5.5万,200套");  
	var labelC2_3_2 = addLabelC(pointC2_3_2,"东恒时代二期","6万,200套");
	var labelC2_3_3 = addLabelC(pointC2_3_3,"康家园","7万,200套");
	var labelC2_3_4 = addLabelC(pointC2_3_4,"美丽亚洲假日花园别墅","8万,200套");
	var labelC2_3_5 = addLabelC(pointC2_3_5,"财满街财经中心","9万,200套");
	var labelC2_3_6 = addLabelC(pointC2_3_6,"国际创展中心","10万,200套");
	var labelC2_3_7 = addLabelC(pointC2_3_7,"十里堡东里","11万,200套");
	var labelC2_3_8 = addLabelC(pointC2_3_8,"海华堂","12万,200套");

	
	for(i=8;i<20;i++){
		map.getOverlays()[i].hide()
	}


	//鼠标缩放地图事件
	map.addEventListener("zoomend",function(){	
		var u = map.getZoom();
		console.log(u)
		if(u<14){
			for(i=0;i<8;i++){
				map.getOverlays()[i].show()
			}
			for(i=8;i<20;i++){
				map.getOverlays()[i].hide()
			}
		}else if(u>=14&u<16){
			for(i=0;i<8;i++){
				map.getOverlays()[i].hide()
			}
			for(i=8;i<12;i++){
				map.getOverlays()[i].show()
			}
			for(i=12;i<20;i++){
				map.getOverlays()[i].hide()
			}
		}else{
			for(i=0;i<12;i++){
				map.getOverlays()[i].hide()
			}
			for(i=12;i<20;i++){
				map.getOverlays()[i].show()
			}
		}
	})

	



	// marker.addEventListener("click", function(){            //图标点击事件 
	//  alert("我的位置");    
	// });

	// marker.enableDragging();                                        //开启拖拽图标功能

	// marker.addEventListener("dragend", function(e){                 //拖拽图标并显示当前坐标        
	//  alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
	// })

	// var opts = {    
	//  width : 250,     // 信息窗口宽度    
	//  height: 100,     // 信息窗口高度    
	//  title : "我的位置"  // 信息窗口标题   
	// }    
	// var infoWindow = new BMap.InfoWindow("定福庄西街一号", opts);  // 创建信息窗口对象    
	// map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

	// var traffic = new BMap.TrafficLayer();        // 创建交通流量图层实例      
	// map.addTileLayer(traffic);                    // 将图层添加到地图上 
})
