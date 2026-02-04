/**
 * Analytics Dashboard Charts
 */
if (typeof echarts !== 'undefined') {
    // === BAR CHART ===
    const barDom = document.getElementById('barChart');
    if (barDom) {
        const barChart = echarts.init(barDom);
        const barOption = {
            tooltip: { trigger: 'axis' },
            legend: { bottom: 0 },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Active',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    itemStyle: { color: '#006fee' }
                },
                {
                    name: 'Inactive',
                    data: [60, 100, 90, 40, 50, 70, 60],
                    type: 'bar',
                    itemStyle: { color: '#f31260' }
                }
            ]
        };
        barChart.setOption(barOption);
        window.addEventListener('resize', () => barChart.resize());
    }

    // === PIE CHART ===
    const pieDom = document.getElementById('pieChart');
    if (pieDom) {
        const pieChart = echarts.init(pieDom);
        const pieOption = {
            tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
            legend: { bottom: 0 },
            series: [
                {
                    name: 'Customer Status',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 1048, name: 'Active' },
                        { value: 735, name: 'Inactive' },
                        { value: 580, name: 'Pending' },
                        { value: 484, name: 'Banned' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        pieChart.setOption(pieOption);
        window.addEventListener('resize', () => pieChart.resize());
    }
}
