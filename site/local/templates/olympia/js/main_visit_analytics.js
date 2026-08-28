/*
10.09.2020
Скрипт выводит график посещаемости СК
https://t.me/dubovcevalex
*/
var app = angular.module('visit_analytics', ['nvd3']);
var data_week;

var file_name = document.getElementById("visit_analytics").dataset.src
var forceY_val = file_name == 'visit_analytics_bas' ? forceY = [200] : forceY = [100]
load_data(0);

app.controller('visit_chart', function($scope) {
    var days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    var time = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];

    //по умолчанию
    xAxis_text = days;

    $scope.options = {
        chart: {
            type: 'multiBarChart',
            height: 250,
            margin: {
                top: 35,
                right: 20,
                bottom: 45,
                left: 85
            },
            clipEdge: true,
            duration: 300,
            stacked: true,
            noData: 'Нет данных',
            showLabels: true,
            showLegend: true,
            forceY: forceY_val,
            showControls: false,
            refreshDataOnly: true,
            deepWatchData: true,
            useInteractiveGuideline: true,
            xAxis: {
                axisLabel: "Время работы",
                showMaxMin: false,
                tickFormat: function(d) {
                    return xAxis_text[d]; //d3.format(',f')(d);
                }
            },
            yAxis: {
                axisLabel: 'Посетителей',
                showMaxMin: false,
                axisLabelDistance: 10,
                tickFormat: function(d) {
                    return d3.format(',.f')(d);
                }
            },
            callback: function(chart) {
                chart.multibar.dispatch.on('elementClick', function(e) {
                    //load_data(e.data['x']);
                });
            }
        }
    };
    $scope.data = data_week;
    $scope.run = true;

    $scope.fresh = function(event) {
        if (!$scope.run) return;
        event != 0 ? xAxis_text = time : xAxis_text = days;
        load_data(event);
        $scope.data = data_week;
    }
});

function load_data(options) {
    $.ajax({
        url: "https://olympia.olympiaperm.ru:1443/visit_analytics/" + file_name + ".json",
        type: "POST",
        dataType: "json",
        crossDomain: true,
        async: false,
        error: function() {
            console.log('error')
        },
        success: function(data) {
            data_week = jQuery.parseJSON(JSON.stringify(data[options]));
            $('#title_chart').html('Прогнозируемая посещаемость с ' + jQuery.parseJSON(JSON.stringify(data['week'])));
        }
    });
}

$('.blue_trans_btn_mod').click(function(event) {
    $('.blue_trans_btn_mod').removeClass('btn_focus');
    $('#' + $(this).attr('id')).addClass('btn_focus');
})