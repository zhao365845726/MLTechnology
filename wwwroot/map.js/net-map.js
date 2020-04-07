// JavaScript source code
/**
 * Created by Administrator on 2017/1/10 0010.
 */
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var geoCoordMap = {
  '南非': [-59.16283, -21.183398],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '英国': [54.458875, 33.656041],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '兰州': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '北京': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '墨西哥': [-134.812515, 65.71052],
  '美国': [-107.731694, 52.779323],
  '南通': [121.1023, 32.1625],
  '斯洛伐克': [12.954573, 14.600036],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '德国': [29.732908, 53.134846],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '日本': [42.684605, 57.335403],
  '坦桑尼亚': [-61.223328, -15.564889],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '加拿大': [-101.550202, 35.120201],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  '福州': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '爱沙尼亚': [-65.049965, -1.240682],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '韩国': [114.971034, -0.296362],
  '澳大利亚': [142.051855, -23.324248],
  '拉脱维亚': [83.769218, 71.216947],
  '芬兰': [100.962437, 62.085151],
  '奥地利': [25.317557, 19.13385],
  '意大利': [37.386183, 29.628137],
  '新西兰': [9.422292, 47.288875],
  '瑞典': [21.490919, 66.190875],
  '保加利亚': [23.257059, -8.616742],
  '韶关': [113.7964, 24.7028],
  '高平': [112.937688, 35.786798],
};

var SXData = [
  //[{ name: '高平' },{name:'高平',value:190}],
  //[{ name: '绍兴' }, { name: '韩国', value: 180 }],
  //[{ name: '绍兴' }, { name: '澳大利亚', value: 170 }],
  //[{ name: '绍兴' }, { name: '拉脱维亚', value: 160 }],
  //[{ name: '绍兴' }, { name: '芬兰', value: 150 }],
  //[{ name: '绍兴' }, { name: '奥地利', value: 140 }],
  //[{ name: '绍兴' }, { name: '意大利', value: 130 }],
  //[{ name: '绍兴' }, { name: '新西兰', value: 120 }],
  //[{ name: '绍兴' }, { name: '瑞典', value: 110 }],
  //[{ name: '绍兴' }, { name: '保加利亚', value: 100 }],
  //[{ name: '绍兴' }, { name: '南非', value: 95 }],
  //[{ name: '绍兴' }, { name: '坦桑尼亚', value: 90 }],
  //[{ name: '绍兴' }, { name: '爱沙尼亚', value: 80 }],
  //[{ name: '绍兴' }, { name: '墨西哥', value: 70 }],
  //[{ name: '绍兴' }, { name: '美国', value: 60 }],
  //[{ name: '绍兴' }, { name: '加拿大', value: 50 }],
  //[{ name: '绍兴' }, { name: '德国', value: 40 }],
  //[{ name: '绍兴' }, { name: '英国', value: 30 }],
  //[{ name: '绍兴' }, { name: '斯洛伐克', value: 20 }],
  //[{ name: '绍兴' }, { name: '日本', value: 10 }]，
  [{ name: '高平' }, { name: '韩国', value: 180 }],
  [{ name: '高平' }, { name: '澳大利亚', value: 170 }],
  [{ name: '高平' }, { name: '拉脱维亚', value: 160 }],
  [{ name: '高平' }, { name: '芬兰', value: 150 }],
  [{ name: '高平' }, { name: '奥地利', value: 140 }],
  [{ name: '高平' }, { name: '意大利', value: 130 }],
  [{ name: '高平' }, { name: '新西兰', value: 120 }],
  [{ name: '高平' }, { name: '瑞典', value: 110 }],
  [{ name: '高平' }, { name: '保加利亚', value: 100 }],
  [{ name: '高平' }, { name: '南非', value: 95 }],
  [{ name: '高平' }, { name: '坦桑尼亚', value: 90 }],
  [{ name: '高平' }, { name: '爱沙尼亚', value: 80 }],
  [{ name: '高平' }, { name: '墨西哥', value: 70 }],
  [{ name: '高平' }, { name: '美国', value: 60 }],
  [{ name: '高平' }, { name: '加拿大', value: 50 }],
  [{ name: '高平' }, { name: '德国', value: 40 }],
  [{ name: '高平' }, { name: '英国', value: 30 }],
  [{ name: '高平' }, { name: '斯洛伐克', value: 20 }],
  [{ name: '高平' }, { name: '日本', value: 10 }]
];

var SHData = [
  /* [{name:'上海'},{name:'包头',value:95}],
   [{name:'上海'},{name:'昆明',value:90}],
   [{name:'上海'},{name:'广州',value:80}],
   [{name:'上海'},{name:'郑州',value:70}],
   [{name:'上海'},{name:'哈尔滨',value:60}],
   [{name:'上海'},{name:'重庆',value:50}],
   [{name:'上海'},{name:'长沙',value:40}],
   [{name:'上海'},{name:'北京',value:30}],
   [{name:'上海'},{name:'丹东',value:20}]*/
];

var GZData = [
  /* [{name:'广州'},{name:'福州',value:95}],
   [{name:'广州'},{name:'太原',value:90}],
   [{name:'广州'},{name:'长春',value:80}],
   [{name:'广州'},{name:'大同',value:70}],
   [{name:'广州'},{name:'西安',value:60}],
   [{name:'广州'},{name:'成都',value:50}],
   [{name:'广州'},{name:'常州',value:40}],
   [{name:'广州'},{name:'北京',value:30}],
   [{name:'广州'},{name:'北海',value:20}],
   [{name:'广州'},{name:'海口',value:10}]*/
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    console.log(dataItem);
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord]
      });
    }
  }
  return res;
};

var color = ['#6ea6e6', '#6ea6e6', '#032a6e'];
var series = [];
[['高平', SXData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
  series.push({
      //name: item[0] + ' Top10',
    type: 'lines',
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.7,
      color: '#6ea6e6',
      symbolSize: 3,

    },
    lineStyle: {
      normal: {
        color: color[i],
        width: 0,
        curveness: 0.2,
      }
    },
    data: convertData(item[1])
  },
    {
        //name: item[0] + ' Top10',
      type: 'lines',
      zlevel: 2,
      effect: {
        //show: true,
        //period: 6,
        //trailLength: 0,
        //symbol: planePath,
        //symbolSize: 55
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.4,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
    {
                //name: item[0] + ' Top10',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[3] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i]
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
});

option = {
  backgroundColor: '',
  textStyle: {
    color: 'rgba(0,0,0,0)',
  },
  // tooltip : {
  //     trigger: 'item'//移上去的提示文字
  // },
  legend: {
    orient: 'vertical',
    top: 'bottom',
    left: 'right',
    data:['北京 Top10', '上海 Top10', '广州 Top10'],
    textStyle: {
      color: '#fff'
    },
    selectedMode: 'single'
  },
  geo: {
    map: 'world',
    zoom: 1.3,// 改变这个值的大小就可以了
    label: {
      emphasis: {
        show: true
      }
    },
    roam: false,//禁止拖动和缩放
    itemStyle: {
      normal: {//选取前颜色
        //areaColor: '#cfdcec',
        areaColor: '#F8E8A9',
        borderColor: '#fff'
      },
      emphasis: {//选取后颜色
        areaColor: '#FDA409'
        //areaColor: '#032a6e'
      }
    }
  },
  series: series
};;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
  window.onresize = myChart.resize
}


$(window).resize(function () {
  myChart.resize();
})