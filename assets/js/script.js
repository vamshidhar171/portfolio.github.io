"use strict";
document.getElementById("DownloadCV").addEventListener("click", function () {
  const fileurl = "assets/Resume/Vamshidhar_Resume.pdf";

  const link = document.createElement("a");
  link.href = fileurl;
  link.download = "Vamshidhar_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
