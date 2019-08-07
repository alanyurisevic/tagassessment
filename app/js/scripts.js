(function($) {

$(document).ready(function(){

  // grab user data and display it
  $.ajax({
    url: 'https://randomuser.me/api/?inc=name,location,phone,email,picture&results=10',
    dataType: 'json',
    success: function(data) {
      console.log(data.results);
      var content = "";
      $.each(data.results,function(i,j){
      content = '<div class="user user--expandable user--collapsed"> \n'+
        '<div class="user__inner"> \n'+
          '<div class="user__photo"><img src="'+j.picture.medium+'" alt="'+j.name.first+' '+j.name.last+'" /></div> \n'+
          '<div class="user__info"><h3>'+j.name.first+' '+j.name.last+'</h3><p>'+j.location.city+', '+j.location.state+'</p></div> \n'+
          '<div class="user__expand"><a class="user__arrow" href="#">Expand/Collapse</a></div> \n'+
        '</div> \n'+
        '<div class="user__contactinfo"> \n'+
          '<div class="user__contactbox"> \n'+
            '<div class="user__label">Phone</div> \n'+
            '<div class="user__value"><a href="tel:'+j.phone+'">'+j.phone+'</a></div> \n'+
          '</div> \n'+
          '<div class="user__contactbox"> \n'+
            '<div class="user__label">Email</div> \n'+
            '<div class="user__value"><a href="mailto:'+j.email+'">'+j.email+'</a></div> \n'+
          '</div> \n'+
        '</div> \n'+
      '</div>';
      $('.main').append(content);
});
    }
  });

  // expand/collapse functionality
  $(document).on('click','.user .user__expand a',function(e){
    e.preventDefault();
    $(this).closest('.user').toggleClass('user--collapsed');
  })

});

})(jQuery);
