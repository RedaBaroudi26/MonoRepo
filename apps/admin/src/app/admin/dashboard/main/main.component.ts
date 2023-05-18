import { Component, OnInit, ViewChild } from '@angular/core';
import { Order, OrderService, Product, ProductService } from '@tp1-mono-repo/shared';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexMarkers,
  ApexGrid,
  ApexTitleSubtitle,
  ApexFill,
  ApexResponsive,
  ApexTheme,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers : [ProductService,OrderService]
})
export class MainComponent implements OnInit {
 
  public lineChartOptions!: Partial<ChartOptions>;

  orders : Order[] = [] ;

  total : number = 0 ;

  completedOrders : Order[] = [] ;

  products : Product [] = [];

  breadscrums = [
    {
      title: 'Dashboad',
      items: [],
      active: 'Dashboard 2',
    },
  ];

  constructor( private OrderService : OrderService , private productService : ProductService ) {
    //constructor
  }

  ngOnInit() {
    
    this.chart1();
    
    this.OrderService.getAllOrders().subscribe(
      ( res )=>{
        this.orders = res.orders ;
        this.completedOrders = res.orders.filter( (order : any) => order.status == 'success' )
        this.total = this.orders.reduce( ( tot , order ) => tot + order.total , 0 )
      }
    )
 
    this.productService.getAllProducts().subscribe(
      (res) => { this.products = res.products }
    )
  
  }

  private chart1() {
    this.lineChartOptions = {
      series: [
        {
          name: 'Teacher 1',
          data: [15, 13, 30, 23, 13, 32, 27],
        },
        {
          name: 'Teacher 2',
          data: [12, 25, 14, 18, 27, 13, 21],
        },
      ],
      chart: {
        height: 270,
        type: 'line',
        foreColor: '#9aa0ac',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#9F78FF', '#858585'],
      stroke: {
        curve: 'smooth',
      },
      grid: {
        show: true,
        borderColor: '#9aa0ac',
        strokeDashArray: 1,
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month',
        },
      },
      yaxis: {
        min: 5,
        max: 40,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  getColor(status:string=''){
    return status == 'pending' ? 'col-orange' :  status == 'cancled' ? 'col-red' : status == 'received' ? 'col-green' : 'col-purple'
  }

}
