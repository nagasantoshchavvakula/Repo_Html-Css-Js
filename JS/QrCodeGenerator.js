function generateQRCode() {
   let website = document.getElementById("website").value;
   if(website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodecontainer.innerHTML="";
      new QRCode(qrCodecontainer,website);

      document.getElementById("qrcode-container").style.display="block";
   }else{
    alert("Please enter valid url")
   }
}
