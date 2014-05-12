$(document).foundation();

// $(function(){

  // Instantiate MixItUp:

$('#Container').mixItUp({
  animation: {
    enable: false   
  },
  callbacks: {
    onMixLoad: function(){
      $(this).mixItUp('setOptions', {
        animation: {
          enable: true  
        },
      });
    }
  }
});

// });