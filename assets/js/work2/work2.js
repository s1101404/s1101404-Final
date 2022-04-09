var topicCount = 0;
var millisecsPerDay = 24*60*60*1000;

function login() {
    topicCount = 6;
    $("#courseTable").empty();
    $("#add").empty();
    $("#add").append(`<div><form method = "post" action = "">
    <input type="text" id="task" required maxlength="10" size="10"><p></p>
    <input type = "button" id = "submit2" value = "新增" onclick = "stuff()">
</form></div>`);
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var month = $("#month").val();
    var day = $("#date").val();
    setMonthAndDay(month, day);

    var task = $("#task").val();
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append(
        /*"<tr>"+
        `<td>${x+1}</td>`+
        `<td>預計日期</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");*/
        `<tr><td>${x+1}</td><td>${new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`);
        }
        
};

function stuff() {
    var task = $("#task").val();

    $("#courseTable").append(`<tr><td>${topicCount+1}</td><td>${new Date(startDate.getTime()+7*topicCount*millisecsPerDay).toLocaleDateString().slice(5)}</td><td>${task}</td></tr>`);
    topicCount+=1;
    
};
