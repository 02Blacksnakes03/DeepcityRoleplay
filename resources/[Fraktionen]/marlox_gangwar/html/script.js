
$(document).ready(function() {
    window.addEventListener("message", function(e) {
      if (e.data.action == "display") {
        if (e.data.show) {
          $("body").show();
          $('.FFA_STATS_FFA').css('display', 'block');
        } else {
          $("body").hide();
          $('.FFA_STATS_FFA').css('display', 'none');
        }
      } else if (e.data.action == "setfraks") {
        document.getElementById('gangwar_att').innerHTML = e.data.fraks.att
        document.getElementById('gangwar_def').innerHTML = e.data.fraks.def
      } else if (e.data.action == "setpoints") {  
        document.getElementById('gangwar_timeatt').innerHTML = e.data.fraks.att
        document.getElementById('gangwar_timedef').innerHTML = e.data.fraks.def
      } else if (e.data.action == "timer") {
        abdi(e.data.time)
      }
      else if (e.data.action == "deathscreen") {
        if (e.data.status == true) {
            $(".gangwar_all").fadeIn("fast");
            $(".Killedby").text(e.data.killer);
            $(".Respawnin").text("Respawn in " + e.data.duration + " Sekunden");
          } else {
            $(".gangwar_all").fadeOut("fast");
          }
      }
      else if (e.data.action == "stats") {
        $(".killstats").text(e.data.kills);
        
        if (e.data.vest.time  <= 1 ) {
            $(".veststats").text(e.data.vest.weste +"x Vest");
        }
        else {
            $(".veststats").text(e.data.vest.weste +"x | " +e.data.vest.time+"sec"); 
          }
      }  
      else if (e.data.action == "flaggen") {
        if (e.data.status == true) {
            $(".erobern").fadeIn("fast");
            $(".flaggenzeit").text(e.data.duration + " Sekunden");
          } else {
            $(".erobern").fadeOut("fast");
          }
      }
    });
  })
  function secondPassed() {
      
    var minutes = Math.round((seconds - 30)/60),
    remainingSeconds = seconds % 60;
  
    if (minutes < 10) {
      minutes = "0" + minutes;  
    }
  
    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;  
    }
    
    document.getElementById('overlay_12').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
      clearInterval(countdownTimer);
      document.getElementById('overlay_12').innerHTML = "00:00";
    } else {
      seconds--;
    }
  }
  
  function abdi(schwanz) {
    seconds = schwanz;
  
    countdownTimer = setInterval('secondPassed()', 1000);
  }