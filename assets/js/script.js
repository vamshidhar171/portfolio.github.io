"use strict";
document.getElementById("DownloadCV").addEventListener("click", function () {
  const fileurl = "assets/Resume/Vamshidhar-Resume.docx";

  const link = document.createElement("a");
  link.href = fileurl;
  link.download = "Vamshidhar-Resume.docx";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
