'use strict';
const socket = io();

//task Model
let tasks = [{
    id: 'Task 1',
    name: 'Création de site',
    start: '2019-12-26',
    end: '2020-01-13',
    progress: 65,
    dependencies: '',
    custom_class: 'bar-milestone' 
}, {
    id: 'Task 2',
    name: 'cahier des charges',
    start: '2019-12-26',
    end: '2019-12-28',
    progress: 100,
    dependencies: 'Task 1',
    custom_class: 'bar-milestone' 
}, {
    id: 'Task 3',
    name: 'création de la base de données',
    start: '2020-01-02',
    end: '2020-01-07',
    progress: 80,
    dependencies: 'Task 1',
    custom_class: 'bar-milestone' 
}, {
    id: 'Task 4',
    name: 'recherche et correctif de bug',
    start: '2019-12-26',
    end: '2020-01-07',
    progress: 0,
    dependencies: 'Task 1',
    custom_class: 'bar-milestone'
}]

//configuration option du gantt
let gantt = new Gantt("#gantt", tasks, {
header_height: 50,
column_width: 30,
step: 24,
view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
bar_height: 20,
bar_corner_radius: 3,
arrow_curve: 5,
padding: 18,
view_mode: 'Day',   
date_format: 'YYYY-MM-DD',
custom_popup_html: null
});


//générateur d'input
(function() {
    $("form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
            socket.emit("task-data", {
                _id : $("#hiddenID").val(),
                task_name : $("#tname").val(),
                start : $("#start").val(),
                end : $("#end").val(),
                statu : $(".chk").val(),
                source : $("#sname").val(),
                step : $("#istep").val()
            });
            

        $("#hiddenID").val("");
        $("#tname").val("");
        $("#start").val("");
        $(".chk").val("");
        $("#sname").val("");
        $("#istep").val("");
        
        return  true;
    });
})();

