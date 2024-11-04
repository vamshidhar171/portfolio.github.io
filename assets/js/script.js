"use strict";
document.getElementById("DownloadCV").addEventListener("click", function () {
  const fileurl = "assets/Resume/Vamshidhar-Resume.docx";

  const link = document.createElement("a");
  link.href = fileurl;
  link.download = "Vamshidhar_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
