$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Planes: Fire & Rescue",
            m4v: "http://www.joeytomaino.com/vid/planes.mp4",
            ogv: "http://www.joeytomaino.com/vid/planes.ogv",
            poster: "http://www.joeytomaino.com/vid/planes.png"
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "m4v, ogv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
      
      $("#jquery_jplayer_2").jPlayer({
	  	ready: function () {
	  		$(this).jPlayer("setMedia", {
	  			title: "Nothing Can Stop Me Now",
	  			m4a: "http://www.joeytomaino.com/aud/planesIntro.mp3",
	  			oga: "http://www.joeytomaino.com/aud/planesIntro.ogg"
			});
		},
		cssSelectorAncestor: "#jp_container_2",
		swfPath: "/js",
		supplied: "m4a, oga",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	   });
});