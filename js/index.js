

$(document).ready( ()=>{
  // add member 
  $("#plus").click(function(){
      var person = $('#in').val();
      addMember(person);
  });
  // minus member
  $("#minus").click(function(){
      var person = $('#in').val();
      minusMember(person);
  });

  function addMember (add){
    var member = parseInt (add) +1;
    if(member >= 0){
      $('#in').val(member);
      compute(member);
    }
  }
  
  function minusMember (add){
    var member = parseInt (add) -1;
    if(member == 0){

    }
    $('#in').val(member);
  }
function compute (member){
  
}

});
