/**
 * Finance Dashboard Charts
 */
$(function () {
    if (typeof echarts !== 'undefined') {

        // === CASH FLOW CHART (Area) ===
        const $flowDom = $('#cashFlowChart');
        if ($flowDom.length) {
            const flowChart = echarts.init($flowDom[0]);
            const flowOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } }
                },
                legend: {
                    data: ['Income', 'Expenses'],
                    bottom: 0,
                    icon: 'circle'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    top: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        axisLine: { lineStyle: { color: '#eee' } },
                        axisLabel: { color: '#999' }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: { show: false },
                        axisLabel: { color: '#999' },
                        splitLine: { lineStyle: { color: '#f5f5f5' } }
                    }
                ],
                series: [
                    {
                        name: 'Income',
                        type: 'line',
                        smooth: true,
                        lineStyle: { width: 3, color: '#006fee' },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.1,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#006fee' },
                                { offset: 1, color: '#fff' }
                            ])
                        },
                        emphasis: { focus: 'series' },
                        data: [2100, 2500, 2200, 2800, 3000, 3200, 3500, 3800, 4200, 4500, 4800, 5200]
                    },
                    {
                        name: 'Expenses',
                        type: 'line',
                        smooth: true,
                        lineStyle: { width: 3, color: '#f31260' },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.1,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#f31260' },
                                { offset: 1, color: '#fff' }
                            ])
                        },
                        emphasis: { focus: 'series' },
                        data: [1500, 1800, 1400, 1600, 1900, 2100, 2000, 2200, 2100, 2400, 2300, 2500]
                    }
                ]
            };
            flowChart.setOption(flowOption);
            $(window).on('resize', () => flowChart.resize());
        }

        // === SPENDING CHART (Donut) ===
        const $spendingDom = $('#spendingChart');
        if ($spendingDom.length) {
            const spendingChart = echarts.init($spendingDom[0]);
            const spendingOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: ${c} ({d}%)'
                },
                legend: {
                    bottom: '0',
                    left: 'center',
                    icon: 'circle',
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: { fontSize: 11 }
                },
                series: [
                    {
                        name: 'Spending',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '45%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: { show: false, position: 'center' },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 1200, name: 'Rent', itemStyle: { color: '#006fee' } },
                            { value: 800, name: 'Food', itemStyle: { color: '#17c964' } },
                            { value: 600, name: 'Entertainment', itemStyle: { color: '#f5a524' } },
                            { value: 400, name: 'Shopping', itemStyle: { color: '#f31260' } },
                            { value: 300, name: 'Transport', itemStyle: { color: '#7828c8' } }
                        ]
                    }
                ]
            };
            spendingChart.setOption(spendingOption);
            $(window).on('resize', () => spendingChart.resize());
        }
    }
});
