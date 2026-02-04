/**
 * Ecommerce Dashboard Charts & Logic
 */
if (typeof echarts !== 'undefined') {
    // === ECOMMERCE ORDERS CHART ===
    const ecommerceDom = document.getElementById('ecommerceOrdersChart');
    if (ecommerceDom) {
        const ecommerceChart = echarts.init(ecommerceDom);
        const ecommerceOption = {
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { type: 'value' },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 111, 238, 0.3)' },
                        { offset: 1, color: 'rgba(0, 111, 238, 0)' }
                    ])
                },
                lineStyle: { width: 3, color: '#006fee' }
            }]
        };
        ecommerceChart.setOption(ecommerceOption);
        window.addEventListener('resize', () => ecommerceChart.resize());
    }

    // === ECOMMERCE CATEGORY CHART ===
    const categoryDom = document.getElementById('categoryChart');
    if (categoryDom) {
        const categoryChart = echarts.init(categoryDom);
        const categoryOption = {
            tooltip: { trigger: 'item' },
            legend: { top: 'bottom' },
            series: [{
                name: 'Category',
                type: 'pie',
                radius: [20, 100],
                roseType: 'area',
                itemStyle: { borderRadius: 8 },
                data: [
                    { value: 40, name: 'Electronics' },
                    { value: 38, name: 'Fashion' },
                    { value: 32, name: 'Home' },
                    { value: 30, name: 'Books' }
                ]
            }]
        };
        categoryChart.setOption(categoryOption);
        window.addEventListener('resize', () => categoryChart.resize());
    }
}

// Tempus Dominus v6 for Ecommerce range
if (typeof tempusDominus !== 'undefined') {
    const dashRangeDom = document.getElementById('dash-range');
    if (dashRangeDom) {
        new tempusDominus.TempusDominus(dashRangeDom, {
            display: {
                components: { clock: false },
                theme: 'light'
            },
            restrictions: { maxDate: new Date() },
            localization: { format: 'dd MMM, yyyy' }
        });
    }
}
