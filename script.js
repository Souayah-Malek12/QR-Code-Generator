const GenerateBtn = document.querySelector(".qr-code");
const textInput = document.querySelector("input");
const qrCodeImage = document.querySelector(".QrCode img");
const DisplayContainer = document.querySelector(".container1");
const refreshBtn = document.querySelector(".refresh");


const refreshPage = () => {
    DisplayContainer.style.display = "block" ;
    textInput.value="";
    qrCodeImage.src="";

}
refreshBtn.addEventListener("click", refreshPage);


const generateCode = () => {
  const text = textInput.value;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  fetch(apiUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      qrCodeImage.src = imageUrl;
      DisplayContainer.style.display = "none" ;
      refreshBtn.style.display= "block";
    })
    .catch((error) => {
      console.error("Error fetching the QR code:", error);
    });

    
}

GenerateBtn.addEventListener("click", generateCode);