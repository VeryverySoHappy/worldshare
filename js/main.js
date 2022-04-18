var num=1;
$(document).ready(function(){
  $('.slider_list li:gt(0)').hide();
  $('.btn_left').on('click',function(e){
    e.preventDefault();
    num--;
    if(num<1){
      num=5
    }
    move(num)
  })
  $('.btn_right').on('click',function(e){
    e.preventDefault();
    num++
    if(num>5){
      num=1
    }
    move(num)
  })

  $('.btn_stop').on('click',function(e){
    e.preventDefault()
    clearInterval(popupset)
    $(this).css({
      'display':'none'
    })
    $('.btn_play').css({
      'display':'inline-block'
    })
  })
  $('.btn_play').on('click',function(e){
    e.preventDefault()
    popupset=setInterval(function(){
      set()
    },5000)
    $(this).css({
      'display':'none'
    })
    $('.btn_stop').css({
      'display':'inline-block'
    })
  })

  var popupset = setInterval(function(){
    set()
  },5000)
})

function move(num){
  $('.count').text(num);
  $('.slider_list li').hide();
  $('.slider_list li:eq('+(num-1)+')').show();
}
function set(){
  $('.btn_right').trigger('click')
}