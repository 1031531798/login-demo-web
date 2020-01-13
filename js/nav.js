$('.nav').mouseover(navOver)
$('.nav').mousedown(navOver)
function navOver(){
    switch(this.id){
        case "rmtj" :down('rmtj_text');down('rmtj_text');;break;
        case "jrwm" :down('jrwm_text');break;
        case "sgyp" :down('sgyp_text');break;
    }
    function down(id){
        $('#'+id).slideDown('0.7s')
    }
    function up(id){
        $('#'+id).slideUp('0.7s')
    }
}