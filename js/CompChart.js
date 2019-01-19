var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["C#", "JavaScript", "SQL", "Autres"],
        datasets: [{
            data: [15, 7, 8, 2],
            backgroundColor: [
                'rgba(44, 62, 80, 0.2)',
                'rgba(17, 131, 109, 0.2)',
                'rgba(31, 118, 176, 0.2)',
                'rgba(243, 156, 18, 0.2)'
            ],
            borderColor: [
                'rgba(44, 62, 80, 1)',
                'rgba(17, 131, 109, 1)',
                'rgba(31, 118, 176, 1)',
                'rgba(243, 156, 18, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options:{
        onClick: graphClickEvent,
        tooltips: {
            enabled: false
       }
    },
});

function graphClickEvent(event, array){
    if(array[0]){
        window.location.href = array[0]._model.label+".html";
        if (array[0]._model.label == "C#") {
            window.location.href ="net.html";
        }
    }
}