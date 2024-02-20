import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import './dashboard.css';
import * as React from 'react';

function Dashboard() {
    const cellSpacing = [10, 10];

    let panels = [
        { 'sizeX': 4, 'sizeY': 1, 'row': 0, 'col': 0, content: lineTemplate, header: "<div>Product usage ratio</div>" },
        { 'sizeX': 3, 'sizeY': 1, 'row': 0, 'col': 4, content: '<div class="content">1</div>' },
        { 'sizeX': 2, 'sizeY': 4, 'row': 0, 'col': 7, content: '<div class="content">2</div>' },
        { 'sizeX': 3, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
        { 'sizeX': 4, 'sizeY': 1, 'row': 1, 'col': 3, content: '<div class="content">4</div>' },
        { 'sizeX': 7, 'sizeY': 2, 'row': 3, 'col': 0, content: '<div class="content">5</div>' },
        // { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }
    ];

    function lineTemplate() {
        const lineData = [
            { x: 2013, y: 28 }, { x: 2014, y: 25 }, { x: 2015, y: 26 }, { x: 2016, y: 27 },
            { x: 2017, y: 32 }, { x: 2018, y: 35 },
        ];
        return (<div className="template">
                <ChartComponent style={{ "height": "162px" }}><Inject services={[LineSeries]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={lineData} xName='x' yName='y' type='Line'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    }
    // Template for Pie Chart
    function pieTemplate() {
        const pieData = [
            { x: 'TypeScript', y: 13, text: 'TS 13%' },
            { x: 'React', y: 12.5, text: 'React 12.5%' },
            { x: 'MVC', y: 12, text: 'MVC 12%' },
            { x: 'Core', y: 12.5, text: 'Core 12.5%' },
            { x: 'Vue', y: 10, text: 'Vue 10%' },
            { x: 'Angular', y: 40, text: 'Angular 40%' }
        ];
        return (<div className="template">
            <AccumulationChartComponent style={{ "height": "162px" }} tooltip={{ enable: true }}><Inject services={[AccumulationTooltip]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' innerRadius="40%"/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>);
    }
    // Template for Pie Chart 1
    function pieTemplate1() {
        const pieData = [
            { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
            { 'x': 'iPhone', y: 19, text: '19%' },
            { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
            { 'x': 'Android', y: 12, text: '12%' }
        ];
        const dataLabel = { visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' } };
        return (<div className="template">
            <AccumulationChartComponent style={{ "height": "162px" }} tooltip={{ enable: true }}>
                <Inject services={[AccumulationTooltip]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={pieData} dataLabel={dataLabel} xName='x' yName='y' radius="70%" name='Browser'/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>);
    }
    function columnTemplate() {
        const chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        return (<div className="template">
                <ChartComponent style={{ "height": "162px" }} primaryXAxis={{ valueType: 'Category' }}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={chartData} xName='month' yName='sales' type='Column'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    }

    return (<div>
        {/* <div className="container"> */}
            <div>
                <DashboardLayoutComponent id="dashboard_default" panels={panels} columns={9} cellSpacing={cellSpacing}>
                    {/* <PanelsDirective>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={0} content={pieTemplate} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={3} content={columnTemplate} header="<div>Last year Sales Comparison</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={3} content={pieTemplate1} header="<div>Mobile browsers usage</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={1} col={0} content={lineTemplate} header="<div>Sales increase percentage</div>"/>
                    </PanelsDirective> */}
                </DashboardLayoutComponent>
            </div>
        {/* </div> */}
    </div>);
}
export default Dashboard;