// Check if echarts is available
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
                    itemStyle: { color: '#4e73df' }
                },
                {
                    name: 'Inactive',
                    data: [60, 100, 90, 40, 50, 70, 60],
                    type: 'bar',
                    itemStyle: { color: '#e74a3b' }
                }
            ]
        };
        barChart.setOption(barOption);

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            barChart.resize();
        });
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

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            pieChart.resize();
        });
    }
    // === CRM PIPELINE CHART ===
    const pipelineDom = document.getElementById('pipelineChart');
    if (pipelineDom) {
        const pipelineChart = echarts.init(pipelineDom);
        const pipelineOption = {
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            xAxis: { type: 'value', boundaryGap: [0, 0.01] },
            yAxis: { type: 'category', data: ['Proposal', 'Negotiation', 'Contact', 'New Lead'] },
            series: [{
                type: 'bar',
                data: [420, 580, 890, 1200],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#006fee' },
                        { offset: 1, color: '#00d4ff' }
                    ]),
                    borderRadius: [0, 4, 4, 0]
                }
            }]
        };
        pipelineChart.setOption(pipelineOption);
        window.addEventListener('resize', () => pipelineChart.resize());
    }

    // === CRM LEAD SOURCE CHART ===
    const leadSourceDom = document.getElementById('leadSourceChart');
    if (leadSourceDom) {
        const leadSourceChart = echarts.init(leadSourceDom);
        const leadSourceOption = {
            tooltip: { trigger: 'item' },
            series: [{
                name: 'Source',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: false, position: 'center' },
                emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
                data: [
                    { value: 1048, name: 'Google' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Ads' }
                ]
            }]
        };
        leadSourceChart.setOption(leadSourceOption);
        window.addEventListener('resize', () => leadSourceChart.resize());
    }

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
} else {
    console.error('ECharts library not loaded.');
}

// Tempus Dominus v6 for Ecommerce range
if (typeof tempusDominus !== 'undefined') {
    const picker = new tempusDominus.TempusDominus(document.getElementById('dash-range'), {
        display: {
            components: {
                clock: false
            },
            theme: 'light'
        },
        restrictions: {
            maxDate: new Date()
        },
        localization: {
            format: 'dd MMM, yyyy'
        }
    });
}


