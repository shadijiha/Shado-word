$("document").ready(function()	{
     $("#importImage").change(function()	{
		showImage();
	});
     $("#importImage").blur(function()	{
		$('.newImage').resizable();
		$('.rnd').draggable({
		    appendTo: 'body',
		    start: function(event, ui) {
		        isDraggingMedia = true;
		    },
		    stop: function(event, ui) {
		        isDraggingMedia = false;
		    }
		});
	});

     $("#replaceAlert").draggable();
     $("#settings").draggable();
     /*
     $(".rnd").hover(function()    {
          alert("test");
          $(".delete_btn").show();
     });
     $(".rnd").mouseout(function()    {
          $(".delete_btn").hide();
     });
     $(".delete_btn").click(function()  {
          $(".rnd").hide();
     });*/
});
