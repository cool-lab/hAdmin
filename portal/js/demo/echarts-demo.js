$(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chart"));
    var lineoption = {
        title : {
            text: '电流电压'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['电流','电压']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1','2','3','4','5','6','7']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [
            {
                name:'电流',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'电压',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);

    var barChart = echarts.init(document.getElementById("echarts-bar-chart"));
    var baroption = {
        title : {
            text: '检测数量'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['检测量一']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'检测量一',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }

        ]
    };
    barChart.setOption(baroption);

    window.onresize = barChart.resize;






    var mapChart = echarts.init(document.getElementById("echarts-map-chart"));
    var mapoption = {
        title : {
            text: '充电桩检测数量',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['数据1','检测2','检测3']
        },
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '数据1',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '河南',value: Math.round(Math.random()*1000)},
                    {name: '云南',value: Math.round(Math.random()*1000)},
                    {name: '辽宁',value: Math.round(Math.random()*1000)},
                    {name: '黑龙江',value: Math.round(Math.random()*1000)},
                    {name: '湖南',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '山东',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '江苏',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '湖北',value: Math.round(Math.random()*1000)},
                    {name: '广西',value: Math.round(Math.random()*1000)},
                    {name: '甘肃',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '陕西',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '贵州',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '青海',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '海南',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '检测2',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '检测3',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };
    mapChart.setOption(mapoption);
    $(window).resize(mapChart.resize);

    var chordChart = echarts.init(document.getElementById("echarts-chord-chart"));
    var chordoption = {
        title : {
            text: '测试数据',
            subtext: 'From d3.js',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                if (params.indicator2) { // is edge
                    return params.value.weight;
                } else {// is node
                    return params.name
                }
            }
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['group1','group2', 'group3', 'group4']
        },
        series : [
            {
                type:'chord',
                sort : 'ascending',
                sortSub : 'descending',
                showScale : true,
                showScaleText : true,
                data : [
                    {name : 'group1'},
                    {name : 'group2'},
                    {name : 'group3'},
                    {name : 'group4'}
                ],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        }
                    }
                },
                matrix : [
                    [11975,  5871, 8916, 2868],
                    [ 1951, 10048, 2060, 6171],
                    [ 8010, 16145, 8090, 8045],
                    [ 1013,   990,  940, 6907]
                ]
            }
        ]
    };

    chordChart.setOption(chordoption);
    $(window).resize(chordChart.resize);

    var forceChart = echarts.init(document.getElementById("echarts-force-chart"));
    var forceoption ={
        title : {
            text: '人物关系：乔布斯',
            subtext: '数据来自人立方',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['家人','朋友']
        },
        series : [
            {
                type:'force',
                name : "人物关系",
                ribbonType: false,
                categories : [
                    {
                        name: '人物'
                    },
                    {
                        name: '家人'
                    },
                    {
                        name:'朋友'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.4)',
                            borderWidth : 1
                        },
                        linkStyle: {
                            type: 'curve'
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle : {
                            //r: 30
                        },
                        linkStyle : {}
                    }
                },
                useWorker: false,
                minRadius : 15,
                maxRadius : 25,
                gravity: 1.1,
                scaling: 1.1,
                roam: 'move',
                nodes:[
                    {category:0, name: '乔布斯', value : 10},
                    {category:1, name: '丽萨-乔布斯',value : 2},
                    {category:1, name: '保罗-乔布斯',value : 3},
                    {category:1, name: '克拉拉-乔布斯',value : 3},
                    {category:1, name: '劳伦-鲍威尔',value : 7},
                    {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
                    {category:2, name: '奥巴马',value : 8},
                    {category:2, name: '比尔-盖茨',value : 9},
                    {category:2, name: '乔纳森-艾夫',value : 4},
                    {category:2, name: '蒂姆-库克',value : 4},
                    {category:2, name: '龙-韦恩',value : 1},
                ],
                links : [
                    {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
                    {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
                    {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
                    {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
                    {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
                    {source : '奥巴马', target : '乔布斯', weight : 1},
                    {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
                    {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
                    {source : '蒂姆-库克', target : '乔布斯', weight : 1},
                    {source : '龙-韦恩', target : '乔布斯', weight : 1},
                    {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
                    {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
                    {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
                    {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
                    {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
                    {source : '比尔-盖茨', target : '奥巴马', weight : 6},
                    {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
                    {source : '蒂姆-库克', target : '奥巴马', weight : 1}
                ]
            }
        ]
    };
    forceChart.setOption(forceoption);
    $(window).resize(forceChart.resize);

    var gaugeChart = echarts.init(document.getElementById("echarts-gauge-chart"));
    var gaugeoption = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'速度',
                type:'gauge',
                min:0,
                max:220,
                splitNumber:11,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 40, name: 'km/h'}]
            },
            {
                name:'转速',
                type:'gauge',
                center : ['25%', '55%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:5
                },
                title : {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
            },
            {
                name:'油表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:135,
                endAngle:45,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber:5,
                    length :10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            },
            {
                name:'水表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:315,
                endAngle:225,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return 'Water';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            }
        ]
    };
    gaugeChart.setOption(gaugeoption);
    $(window).resize(gaugeChart.resize);

    var funnelChart = echarts.init(document.getElementById("echarts-funnel-chart"));
    var funneloption = {
        title : {
            text: '漏斗图',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            data : ['展现','点击','访问','咨询','订单']
        },
        calculable : true,
        series : [
            {
                name:'漏斗图',
                type:'funnel',
                width: '40%',
                data:[
                    {value:60, name:'访问'},
                    {value:40, name:'咨询'},
                    {value:20, name:'订单'},
                    {value:80, name:'点击'},
                    {value:100, name:'展现'}
                ]
            },
            {
                name:'金字塔',
                type:'funnel',
                x : '50%',
                sort : 'ascending',
                itemStyle: {
                    normal: {
                        // color: 各异,
                        label: {
                            position: 'left'
                        }
                    }
                },
                data:[
                    {value:60, name:'访问'},
                    {value:40, name:'咨询'},
                    {value:20, name:'订单'},
                    {value:80, name:'点击'},
                    {value:100, name:'展现'}
                ]
            }
        ]
    };

    funnelChart.setOption(funneloption);
    $(window).resize(funnelChart.resize);

});
