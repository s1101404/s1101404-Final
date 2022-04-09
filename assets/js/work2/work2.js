function login() {
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;

    var millisecsPerDay = 24*60*60*1000;

    var month = $("#month").val();
    var day = $("#date").val();
    setMonthAndDay(month, day);

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