// Type writing text //
$(document).ready(function(){
  $('#typewriteText').typewrite({
      actions: [
          {delay: 3000},
          {type: 'Developer'},          
          {delay: 1500},
          {remove: {num: 9, type: 'Designer'}}, 
          {type: 'Designer'},         
          {delay: 2000},
          {remove: {num: 8, type: 'Freelancer'}},
          {type: 'Freelancer'},
          {delay: 300},     
          {remove: {num: 10, type: 'Freelancer'}},  
          {type: 'Programmer'}, 
      ]
  });
});

