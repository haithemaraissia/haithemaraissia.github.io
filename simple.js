﻿/// <reference path="ThirdParty/amcharts.js" />
/// <reference path="ThirdParty/serial.js" />
/// <reference path="~/Scripts/angular-scenario.js" />
/// <reference path="~/Scripts/angular-mocks.js" />

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true
    },
    "chartCursor": {
        "enabled": true
    },
    "chartScrollbar": {
        "enabled": true,
        "graph": "g1",
        "graphType": "line",
        "scrollbarHeight": 30
    },
    "trendLines": [],
    "graphs": [{
        "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
        "closeField": "close",
        "fillAlphas": 0.9,
        "fillColors": "#7f8da9",
        "highField": "high",
        "id": "g1",
        "lineColor": "#7f8da9",
        "lowField": "low",
        "negativeFillColors": "#db4c3c",
        "negativeLineColor": "#db4c3c",
        "openField": "open",
        "title": "Price:",
        "type": "candlestick",
        "valueField": "close"
    }],
    "guides": [],
    "valueAxes": [{
        "id": "ValueAxis-1"
    }],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [{
        "date": "2011-08-01",
        "open": "136.65",
        "high": "136.96",
        "low": "134.15",
        "close": "136.49"
    }, {
        "date": "2011-08-02",
        "open": "135.26",
        "high": "135.95",
        "low": "131.50",
        "close": "131.85"
    }, {
        "date": "2011-08-05",
        "open": "132.90",
        "high": "135.27",
        "low": "128.30",
        "close": "135.25"
    }, {
        "date": "2011-08-06",
        "open": "134.94",
        "high": "137.24",
        "low": "132.63",
        "close": "135.03"
    }, {
        "date": "2011-08-07",
        "open": "136.76",
        "high": "136.86",
        "low": "132.00",
        "close": "134.01"
    }, {
        "date": "2011-08-08",
        "open": "131.11",
        "high": "133.00",
        "low": "125.09",
        "close": "126.39"
    }, {
        "date": "2011-08-09",
        "open": "123.12",
        "high": "127.75",
        "low": "120.30",
        "close": "125.00"
    }, {
        "date": "2011-08-12",
        "open": "128.32",
        "high": "129.35",
        "low": "126.50",
        "close": "127.79"
    }, {
        "date": "2011-08-13",
        "open": "128.29",
        "high": "128.30",
        "low": "123.71",
        "close": "124.03"
    }, {
        "date": "2011-08-14",
        "open": "122.74",
        "high": "124.86",
        "low": "119.65",
        "close": "119.90"
    }, {
        "date": "2011-08-15",
        "open": "117.01",
        "high": "118.50",
        "low": "111.62",
        "close": "117.05"
    }, {
        "date": "2011-08-16",
        "open": "122.01",
        "high": "123.50",
        "low": "119.82",
        "close": "122.06"
    }, {
        "date": "2011-08-19",
        "open": "123.96",
        "high": "124.50",
        "low": "120.50",
        "close": "122.22"
    }, {
        "date": "2011-08-20",
        "open": "122.21",
        "high": "128.96",
        "low": "121.00",
        "close": "127.57"
    }, {
        "date": "2011-08-21",
        "open": "131.22",
        "high": "132.75",
        "low": "130.33",
        "close": "132.51"
    }, {
        "date": "2011-08-22",
        "open": "133.09",
        "high": "133.34",
        "low": "129.76",
        "close": "131.07"
    }, {
        "date": "2011-08-23",
        "open": "130.53",
        "high": "135.37",
        "low": "129.81",
        "close": "135.30"
    }, {
        "date": "2011-08-26",
        "open": "133.39",
        "high": "134.66",
        "low": "132.10",
        "close": "132.25"
    }, {
        "date": "2011-08-27",
        "open": "130.99",
        "high": "132.41",
        "low": "126.63",
        "close": "126.82"
    }, {
        "date": "2011-08-28",
        "open": "129.88",
        "high": "134.18",
        "low": "129.54",
        "close": "134.08"
    }, {
        "date": "2011-08-29",
        "open": "132.67",
        "high": "138.25",
        "low": "132.30",
        "close": "136.25"
    }, {
        "date": "2011-08-30",
        "open": "139.49",
        "high": "139.65",
        "low": "137.41",
        "close": "138.48"
    }, {
        "date": "2011-09-03",
        "open": "139.94",
        "high": "145.73",
        "low": "139.84",
        "close": "144.16"
    }, {
        "date": "2011-09-04",
        "open": "144.97",
        "high": "145.84",
        "low": "136.10",
        "close": "136.76"
    }, {
        "date": "2011-09-05",
        "open": "135.56",
        "high": "137.57",
        "low": "132.71",
        "close": "135.01"
    }, {
        "date": "2011-09-06",
        "open": "132.01",
        "high": "132.30",
        "low": "130.00",
        "close": "131.77"
    }, {
        "date": "2011-09-09",
        "open": "136.99",
        "high": "138.04",
        "low": "133.95",
        "close": "136.71"
    }, {
        "date": "2011-09-10",
        "open": "137.90",
        "high": "138.30",
        "low": "133.75",
        "close": "135.49"
    }, {
        "date": "2011-09-11",
        "open": "135.99",
        "high": "139.40",
        "low": "135.75",
        "close": "136.85"
    }, {
        "date": "2011-09-12",
        "open": "138.83",
        "high": "139.00",
        "low": "136.65",
        "close": "137.20"
    }, {
        "date": "2011-09-13",
        "open": "136.57",
        "high": "138.98",
        "low": "136.20",
        "close": "138.81"
    }, {
        "date": "2011-09-16",
        "open": "138.99",
        "high": "140.59",
        "low": "137.60",
        "close": "138.41"
    }, {
        "date": "2011-09-17",
        "open": "139.06",
        "high": "142.85",
        "low": "137.83",
        "close": "140.92"
    }, {
        "date": "2011-09-18",
        "open": "143.02",
        "high": "143.16",
        "low": "139.40",
        "close": "140.77"
    }, {
        "date": "2011-09-19",
        "open": "140.15",
        "high": "141.79",
        "low": "139.32",
        "close": "140.31"
    }, {
        "date": "2011-09-20",
        "open": "141.14",
        "high": "144.65",
        "low": "140.31",
        "close": "144.15"
    }, {
        "date": "2011-09-23",
        "open": "146.73",
        "high": "149.85",
        "low": "146.65",
        "close": "148.28"
    }, {
        "date": "2011-09-24",
        "open": "146.84",
        "high": "153.22",
        "low": "146.82",
        "close": "153.18"
    }, {
        "date": "2011-09-25",
        "open": "154.47",
        "high": "155.00",
        "low": "151.25",
        "close": "152.77"
    }, {
        "date": "2011-09-26",
        "open": "153.77",
        "high": "154.52",
        "low": "152.32",
        "close": "154.50"
    }, {
        "date": "2011-09-27",
        "open": "153.44",
        "high": "154.60",
        "low": "152.75",
        "close": "153.47"
    }, {
        "date": "2011-09-30",
        "open": "154.63",
        "high": "157.41",
        "low": "152.93",
        "close": "156.34"
    }, {
        "date": "2011-10-01",
        "open": "156.55",
        "high": "158.59",
        "low": "155.89",
        "close": "158.45"
    }, {
        "date": "2011-10-02",
        "open": "157.78",
        "high": "159.18",
        "low": "157.01",
        "close": "157.92"
    }, {
        "date": "2011-10-03",
        "open": "158.00",
        "high": "158.08",
        "low": "153.50",
        "close": "156.24"
    }, {
        "date": "2011-10-04",
        "open": "158.37",
        "high": "161.58",
        "low": "157.70",
        "close": "161.45"
    }, {
        "date": "2011-10-07",
        "open": "163.49",
        "high": "167.91",
        "low": "162.97",
        "close": "167.91"
    }, {
        "date": "2011-10-08",
        "open": "170.20",
        "high": "171.11",
        "low": "166.68",
        "close": "167.86"
    }, {
        "date": "2011-10-09",
        "open": "167.55",
        "high": "167.88",
        "low": "165.60",
        "close": "166.79"
    }, {
        "date": "2011-10-10",
        "open": "169.49",
        "high": "171.88",
        "low": "153.21",
        "close": "162.23"
    }, {
        "date": "2011-10-11",
        "open": "163.01",
        "high": "167.28",
        "low": "161.80",
        "close": "167.25"
    }, {
        "date": "2011-10-14",
        "open": "167.98",
        "high": "169.57",
        "low": "163.50",
        "close": "166.98"
    }, {
        "date": "2011-10-15",
        "open": "165.54",
        "high": "170.18",
        "low": "165.15",
        "close": "169.58"
    }, {
        "date": "2011-10-16",
        "open": "172.69",
        "high": "173.04",
        "low": "169.18",
        "close": "172.75"
    }, {
        "date": "2011-10-17",
        "open": "171.50",
        "high": "174.19",
        "low": "171.05",
        "close": "173.50"
    }, {
        "date": "2011-10-18",
        "open": "174.24",
        "high": "174.63",
        "low": "170.00",
        "close": "170.42"
    }, {
        "date": "2011-10-21",
        "open": "170.35",
        "high": "174.90",
        "low": "169.96",
        "close": "174.36"
    }, {
        "date": "2011-10-22",
        "open": "188.56",
        "high": "188.60",
        "low": "182.76",
        "close": "186.16"
    }, {
        "date": "2011-10-23",
        "open": "185.81",
        "high": "187.21",
        "low": "179.24",
        "close": "185.93"
    }, {
        "date": "2011-10-24",
        "open": "184.87",
        "high": "185.90",
        "low": "181.66",
        "close": "182.78"
    }, {
        "date": "2011-10-25",
        "open": "185.29",
        "high": "185.37",
        "low": "182.88",
        "close": "184.70"
    }, {
        "date": "2011-10-28",
        "open": "185.45",
        "high": "186.59",
        "low": "184.70",
        "close": "185.09"
    }, {
        "date": "2011-10-29",
        "open": "186.18",
        "high": "189.37",
        "low": "184.73",
        "close": "187.00"
    }, {
        "date": "2011-10-30",
        "open": "187.63",
        "high": "190.12",
        "low": "184.95",
        "close": "189.95"
    }, {
        "date": "2011-10-31",
        "open": "188.60",
        "high": "190.10",
        "low": "180.00",
        "close": "187.44"
    }, {
        "date": "2011-11-01",
        "open": "189.21",
        "high": "189.44",
        "low": "183.49",
        "close": "187.87"
    }, {
        "date": "2011-11-04",
        "open": "185.29",
        "high": "188.96",
        "low": "184.24",
        "close": "186.18"
    }, {
        "date": "2011-11-05",
        "open": "187.05",
        "high": "192.00",
        "low": "185.27",
        "close": "191.79"
    }, {
        "date": "2011-11-06",
        "open": "190.61",
        "high": "192.68",
        "low": "186.13",
        "close": "186.30"
    }, {
        "date": "2011-11-07",
        "open": "186.67",
        "high": "186.90",
        "low": "167.77",
        "close": "175.47"
    }, {
        "date": "2011-11-08",
        "open": "171.15",
        "high": "175.12",
        "low": "165.21",
        "close": "165.37"
    }, {
        "date": "2011-11-11",
        "open": "165.28",
        "high": "167.70",
        "low": "150.63",
        "close": "153.76"
    }, {
        "date": "2011-11-12",
        "open": "160.85",
        "high": "170.98",
        "low": "153.76",
        "close": "169.96"
    }, {
        "date": "2011-11-13",
        "open": "177.16",
        "high": "177.57",
        "low": "163.74",
        "close": "166.11"
    }, {
        "date": "2011-11-14",
        "open": "166.39",
        "high": "169.59",
        "low": "160.30",
        "close": "164.30"
    }, {
        "date": "2011-11-15",
        "open": "165.30",
        "high": "167.02",
        "low": "159.33",
        "close": "166.39"
    }, {
        "date": "2011-11-18",
        "open": "166.10",
        "high": "168.20",
        "low": "162.10",
        "close": "163.95"
    }, {
        "date": "2011-11-19",
        "open": "165.67",
        "high": "171.79",
        "low": "163.53",
        "close": "168.85"
    }, {
        "date": "2011-11-20",
        "open": "165.84",
        "high": "172.35",
        "low": "164.67",
        "close": "168.46"
    }, {
        "date": "2011-11-22",
        "open": "172.00",
        "high": "172.05",
        "low": "169.75",
        "close": "171.54"
    }, {
        "date": "2011-11-25",
        "open": "173.59",
        "high": "177.27",
        "low": "172.35",
        "close": "172.54"
    }, {
        "date": "2011-11-26",
        "open": "175.22",
        "high": "175.79",
        "low": "170.01",
        "close": "174.81"
    }, {
        "date": "2011-11-27",
        "open": "176.82",
        "high": "180.60",
        "low": "175.35",
        "close": "180.22"
    }, {
        "date": "2011-11-28",
        "open": "179.43",
        "high": "185.17",
        "low": "179.15",
        "close": "184.29"
    }, {
        "date": "2011-11-29",
        "open": "187.34",
        "high": "187.70",
        "low": "179.70",
        "close": "182.22"
    }, {
        "date": "2011-12-02",
        "open": "181.86",
        "high": "184.14",
        "low": "177.70",
        "close": "178.86"
    }, {
        "date": "2011-12-03",
        "open": "177.15",
        "high": "180.90",
        "low": "176.99",
        "close": "179.81"
    }, {
        "date": "2011-12-04",
        "open": "182.89",
        "high": "186.00",
        "low": "182.41",
        "close": "185.50"
    }, {
        "date": "2011-12-05",
        "open": "186.19",
        "high": "190.10",
        "low": "186.12",
        "close": "189.95"
    }, {
        "date": "2011-12-06",
        "open": "190.54",
        "high": "194.99",
        "low": "188.04",
        "close": "194.30"
    }, {
        "date": "2011-12-09",
        "open": "193.59",
        "high": "195.66",
        "low": "192.69",
        "close": "194.21"
    }, {
        "date": "2011-12-10",
        "open": "194.75",
        "high": "196.83",
        "low": "187.39",
        "close": "188.54"
    }, {
        "date": "2011-12-11",
        "open": "193.44",
        "high": "194.48",
        "low": "185.76",
        "close": "190.86"
    }, {
        "date": "2011-12-12",
        "open": "190.19",
        "high": "192.12",
        "low": "187.82",
        "close": "191.83"
    }, {
        "date": "2011-12-13",
        "open": "190.37",
        "high": "193.20",
        "low": "189.54",
        "close": "190.39"
    }, {
        "date": "2011-12-16",
        "open": "190.72",
        "high": "192.65",
        "low": "182.98",
        "close": "184.40"
    }, {
        "date": "2011-12-17",
        "open": "186.52",
        "high": "187.33",
        "low": "178.60",
        "close": "182.98"
    }, {
        "date": "2011-12-18",
        "open": "182.98",
        "high": "184.64",
        "low": "180.90",
        "close": "183.12"
    }, {
        "date": "2011-12-19",
        "open": "185.43",
        "high": "187.83",
        "low": "183.33",
        "close": "187.21"
    }, {
        "date": "2011-12-20",
        "open": "190.12",
        "high": "193.91",
        "low": "189.89",
        "close": "193.91"
    }, {
        "date": "2011-12-23",
        "open": "195.03",
        "high": "199.33",
        "low": "194.79",
        "close": "198.80"
    }, {
        "date": "2011-12-25",
        "open": "199.01",
        "high": "200.96",
        "low": "196.82",
        "close": "198.95"
    }, {
        "date": "2011-12-26",
        "open": "198.95",
        "high": "202.96",
        "low": "197.80",
        "close": "198.57"
    }, {
        "date": "2011-12-27",
        "open": "200.59",
        "high": "201.56",
        "low": "196.88",
        "close": "199.83"
    }, {
        "date": "2011-12-30",
        "open": "199.50",
        "high": "200.50",
        "low": "197.75",
        "close": "198.08"
    }, {
        "date": "2012-01-01",
        "open": "199.27",
        "high": "200.26",
        "low": "192.55",
        "close": "194.84"
    }, {
        "date": "2012-01-02",
        "open": "195.41",
        "high": "197.39",
        "low": "192.69",
        "close": "194.93"
    }, {
        "date": "2012-01-03",
        "open": "191.45",
        "high": "193.00",
        "low": "178.89",
        "close": "180.05"
    }, {
        "date": "2012-01-06",
        "open": "181.25",
        "high": "183.60",
        "low": "170.23",
        "close": "177.64"
    }, {
        "date": "2012-01-07",
        "open": "180.14",
        "high": "182.46",
        "low": "170.80",
        "close": "171.25"
    }, {
        "date": "2012-01-08",
        "open": "171.30",
        "high": "179.50",
        "low": "168.30",
        "close": "179.40"
    }, {
        "date": "2012-01-09",
        "open": "177.58",
        "high": "181.00",
        "low": "175.41",
        "close": "178.02"
    }, {
        "date": "2012-01-10",
        "open": "176.00",
        "high": "177.85",
        "low": "170.00",
        "close": "172.69"
    }, {
        "date": "2012-01-13",
        "open": "177.52",
        "high": "179.42",
        "low": "175.17",
        "close": "178.78"
    }, {
        "date": "2012-01-14",
        "open": "177.72",
        "high": "179.22",
        "low": "164.66",
        "close": "169.04"
    }, {
        "date": "2012-01-15",
        "open": "165.23",
        "high": "169.01",
        "low": "156.70",
        "close": "159.64"
    }, {
        "date": "2012-01-16",
        "open": "161.51",
        "high": "165.36",
        "low": "158.42",
        "close": "160.89"
    }, {
        "date": "2012-01-17",
        "open": "161.71",
        "high": "165.75",
        "low": "159.61",
        "close": "161.36"
    }, {
        "date": "2012-01-21",
        "open": "148.06",
        "high": "159.98",
        "low": "146.00",
        "close": "155.64"
    }, {
        "date": "2012-01-22",
        "open": "136.19",
        "high": "140.00",
        "low": "126.14",
        "close": "139.07"
    }, {
        "date": "2012-01-23",
        "open": "139.99",
        "high": "140.70",
        "low": "132.01",
        "close": "135.60"
    }, {
        "date": "2012-01-24",
        "open": "138.99",
        "high": "139.09",
        "low": "129.61",
        "close": "130.01"
    }, {
        "date": "2012-01-27",
        "open": "128.16",
        "high": "133.20",
        "low": "126.45",
        "close": "130.01"
    }, {
        "date": "2012-01-28",
        "open": "131.15",
        "high": "132.79",
        "low": "129.05",
        "close": "131.54"
    }, {
        "date": "2012-01-29",
        "open": "131.37",
        "high": "135.45",
        "low": "130.00",
        "close": "132.18"
    }, {
        "date": "2012-01-30",
        "open": "129.45",
        "high": "136.65",
        "low": "129.40",
        "close": "135.36"
    }, {
        "date": "2012-01-31",
        "open": "136.24",
        "high": "136.59",
        "low": "132.18",
        "close": "133.75"
    }, {
        "date": "2012-02-03",
        "open": "134.21",
        "high": "135.90",
        "low": "131.42",
        "close": "131.65"
    }, {
        "date": "2012-02-04",
        "open": "130.43",
        "high": "134.00",
        "low": "128.90",
        "close": "129.36"
    }, {
        "date": "2012-02-05",
        "open": "130.83",
        "high": "131.92",
        "low": "121.77",
        "close": "122.00"
    }, {
        "date": "2012-02-06",
        "open": "119.97",
        "high": "124.78",
        "low": "117.27",
        "close": "121.24"
    }, {
        "date": "2012-02-07",
        "open": "122.08",
        "high": "125.70",
        "low": "121.60",
        "close": "125.48"
    }, {
        "date": "2012-02-10",
        "open": "128.01",
        "high": "129.98",
        "low": "127.20",
        "close": "129.45"
    }, {
        "date": "2012-02-11",
        "open": "130.70",
        "high": "131.00",
        "low": "123.62",
        "close": "124.86"
    }, {
        "date": "2012-02-12",
        "open": "126.68",
        "high": "129.78",
        "low": "125.63",
        "close": "129.40"
    }]
});











































var app = angular.module('myApp', ['googlechart']);

app.controller('myCtrl', function ($scope, $http, $window) {

    $scope.loading = true;
    $scope.valideDate = true;

    function noDataChecking() {



        $("#NoData").hide();

        if ($scope.Positive == 0 && $scope.Negative == 0 && $scope.Neutral == 0) {
           
            $("#chartdiv").hide();
            $("#googleChart").hide();
            $("#StatiticsRaw").hide();
            $("#NoData").show();

            $('#RawStockSelection').collapse('hide');
            $('#RawDatacollapse').collapse('hide');
            $('#collapseDateTime').collapse('hide');
        } else {

            $("#chartdiv").show();
            $("#googleChart").show();
            $("#StatiticsRaw").show();
            $("#NoData").hide();
        }

    }

    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'www.nasdaq.com%2Fscreening%2Fcompanies-by-name.aspx%3Fletter%3DA%26render%3Ddownload'%20and%20columns%3D'Symbol%2CName%2CLastSale%2CMarketCap%2CIPOyear%2CSector%2CIndustry%2CSummary%2CQuote'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .then(function (response) {
            if (response.data.query.results != null) {
                $scope.cache = true;
                $scope.live = false;
                $scope.Symbols = response.data.query.results.row;
            }
            else {
                $http.get("Data/Cached/Symbol/AllSymbols.json")
                  .then(function (response) {
                      $scope.cache = false;
                      $scope.live = true;
                      $scope.Symbols = response.data.query.results.row;
                  });
            }



            $scope.patterns = [
                { id: "1", name: "Every Day" },
                { id: "2", name: "Every 3 Days" },
                { id: "3", name: "Every 1 Low" },
                { id: "4", name: "Every 1 high" }
            ];

            if ($scope.Symbols[0] != null) {
                $scope.selectedSymbol = $scope.Symbols[0];
            } else {
                $scope.selectedSymbol = "PIH";
            }
            $scope.selectedPattern = $scope.patterns[0];

            $scope.Positive = 30;
            $scope.Negative = 30;
            $scope.Neutral = 30;

            var chart1 = {};
            chart1.type = "PieChart";
            chart1.cssStyle = "margin:auto";
            chart1.data = [
              ['Gain', 'Percentage'],
              ['Positive', $scope.Positive],
              ['Negative', $scope.Negative],
              ['Neutral', $scope.Neutral]
            ];
            chart1.options = {
                title: "Statistics",
                displayExactValues: true,
                width: 400,
                height: 200,
                is3D: true,
                chartArea: {
                    left: 10,
                    top: 10,
                    bottom: 0,
                    height: "100%"
                }
            };

            chart1.formatters = {
                number: [{
                    columnNum: 1,
                    pattern: " #,##0.00"
                }]
            };

            $scope.chart = chart1;

        })
        .finally(function () {
            $("#spinner").hide();
            noDataChecking();
    });


    function constructApi(stock, startdate, enddate) {
        if (startdate == null) {
            startdate = "2009-04-01";
        }
        if (enddate == null) {
            enddate = "2010-03-10";
        }
        var apiCall = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"
                        + stock + "%22%20and%20startDate%20%3D%20%22"
                        + startdate
                        + "%22%20and%20endDate%20%3D%20%22"
                        + enddate
                        + "%22%20%7C%20sort%20(%20field%3D%22Date%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";


         $scope.APICall = apiCall;
        return apiCall;
    }

    function calculate(startdate, enddate) {

       $("#spinner").show();
        $scope.Symbol = $scope.selectedSymbol.Symbol;
        var apiQuery = constructApi($scope.selectedSymbol.Symbol);
        if(startdate != null && enddate != null) {
            apiQuery = constructApi($scope.selectedSymbol.Symbol, startdate, enddate);
        }
        $http.get(apiQuery)
            .then(function (apiResponse) {
                var response;
                if (apiResponse == null) {
                    $http
                        .get("Data/Cached/Symbol/Sample/Y.json")
                        .then(function (cacheResponse) {
                            response = cacheResponse;
                            $scope.dataStatus = "DATA FROM SAMPLE";
                        });
                } else {
                    response = apiResponse;
                    $scope.dataStatus = "DATA LIVE";
                }



                $window.chart.dataProvider = [];

                var selectedPatternId = 1;

                if ($scope.selectedPattern != null && $scope.selectedPattern.id != null) {
                    selectedPatternId = $scope.selectedPattern.id;
                }

                var positiveCount = 0;
                var negativeCount = 0;
                var neturalCount = 0;

                var low = 0;
                var high = 0;
                var dateCount = 0;

                if (response.data.query.results != null) {
                    $scope.quotes = response.data.query.results.quote;
                    for (var i = 0; i < response.data.query.results.quote.length; i++) {
                        $window.chart.dataProvider.push({
                            "date": response.data.query.results.quote[i].Date,
                            "open": parseFloat(response.data.query.results.quote[i].Open).toFixed(2),
                            "high": parseFloat(response.data.query.results.quote[i].High).toFixed(2),
                            "low": parseFloat(response.data.query.results.quote[i].Low).toFixed(2),
                            "close": parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                        });

                        if (selectedPatternId == 1) {

                            //******************************Every Day******************************//

                            if (
                                parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                    >
                                    parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                positiveCount += 1;
                            }

                            if (
                                parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                    ===
                                    parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                neturalCount += 1;
                            }

                            if (
                                parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                    <
                                    parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                negativeCount += 1;
                            }
                        }


                        //******************************Every Day******************************//


                        if (selectedPatternId == 2) {


                            //******************************Every 3 Day******************************///

                            if (dateCount < 2) {
                                dateCount++;
                            } else {
                                //Every Day
                                if (
                                    parseFloat(response.data.query.results.quote[i].Open).toFixed(2)
                                        >
                                        parseFloat(response.data.query.results.quote[i].Close).toFixed(2)) {
                                    positiveCount += 1;
                                }
                                if (
                                    parseFloat(response.data.query.results.quote[i].Low).toFixed(2)
                                        ===
                                        parseFloat(response.data.query.results.quote[i].Close).toFixed(2)) {
                                    negativeCount += 1;
                                }
                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        <
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    neturalCount += 1;
                                }
                                //Every Day
                                dateCount = 0;
                            }
                        }

                        //******************************Every 3 Day******************************//


                        //******************************Every Low******************************//

                        if (selectedPatternId == 3) {

                            if (low === 0) {
                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        >
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    positiveCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        ===
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    neturalCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        <
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    negativeCount += 1;
                                }

                                low = 1;
                            }

                            if (low === 1) {
                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        >
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    positiveCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        ===
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    neturalCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        <
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    negativeCount += 1;
                                }

                                low = 0;
                            }
                        }

                        //******************************Every Low******************************//



                        if (selectedPatternId == 4) {

                            //******************************Every High******************************//

                            if (high === 0) {
                                if (
                                     parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                      >
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    positiveCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        ===
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    neturalCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        <
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    negativeCount += 1;
                                }

                                high = 1;
                            }

                            if (high === 1) {
                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        >
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    positiveCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        ===
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    neturalCount += 1;
                                }

                                if (
                                    parseFloat(response.data.query.results.quote[i].Close).toFixed(2)
                                        <
                                        parseFloat(response.data.query.results.quote[i].Open).toFixed(2)) {
                                    negativeCount += 1;
                                }

                                high = 0;
                            }

                        }
                    }
                    //******************************Every High******************************//



                }//End of response.data.query.results != null

                $window.chart.validateData();

                $scope.Positive = positiveCount;
                $scope.Negative = negativeCount;
                $scope.Neutral = neturalCount;

                $scope.chart.data[1][1] = positiveCount;
                $scope.chart.data[2][1] = negativeCount;
                $scope.chart.data[3][1] = neturalCount;
            })
                .finally(function () {
                    $("#spinner").hide();
                    $('#collapseStatistics').collapse('show');
                    $('#RawStockSelection').collapse('show');
                    $('#RawDatacollapse').collapse('show');
                    noDataChecking();
        });

    }


    $scope.onSymbolChanged = function () {
        if ($scope.startDate != null && $scope.endDate != null) {
            alert($scope.startDate);
            calculate($scope.startDate, $scope.endDate);
        } else {
            calculate();
        }

    };

    $scope.onPatternChanged = function () {
        if ($scope.startDate != null && $scope.endDate != null) {
            alert($scope.startDate);
            calculate($scope.startDate, $scope.endDate);
        } else {
             calculate();
        }
       
    };

    $scope.GrabData = function () {
        $http.get(constructApi($scope.Symbol))
          .then(function (response) {
              $scope.quotes = response.data.query.results.quote;
          });
    };



    $scope.updateTimeConstraint = function () {
        calculate($scope.startDate, $scope.endDate);
    }


});



app.directive('datepicker', function () {
    return {
        // scope: true,

        link: function (scope, el, attr) {


            $(el).datepicker({
                viewMode: 'days',
                dateFormat: 'yy-mm-dd',
                onSelect: function (dateText) {
                    $('#TimeConstraintButton').prop('disabled', true);
                    var fieldName = el.attr('name');
                    if (fieldName === 'Start') {
                        scope.startDate = dateText;
                    }
                    if (fieldName === 'End') {
                        scope.endDate = dateText;
                    }



                    if (scope.startDate == null) {
                        scope.valideDate = true;
 
                        alert("start date is null");

                    }

                    if (scope.endDate == null) {
                        scope.valideDate = true;
                        alert("end date is null");

                    }


                    if (scope.startDate != null & scope.endDate != null) {
                        if (scope.startDate <= scope.endDate) {

                            scope.valideDate = false;
                            $('#TimeConstraintButton').prop('disabled', false);
                        }
                    }




                }
            });
        }
    };
});

//DateTime
//$(window).load(function () {
//    $('#datetimepicker1').datetimepicker({
//        viewMode: 'days',
//        format: 'DD/MM/YYYY'
//    });
//    $('#datetimepicker2').datetimepicker({
//        viewMode: 'days',
//        format: 'DD/MM/YYYY'
//    });
//});


