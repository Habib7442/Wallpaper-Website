alert("Welcome! click image to download")
function download(file){
    var link=document.getElementById("download");
    link.setAttribute("download",file);
    link.click()
  };

  