//axios import buraya gelecek
const { default: axios } = require("axios");

//const { default: axios } = require("axios");

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<195.174.128.211>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
function cardFunc(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = data.ülkebayrağı;
  card.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const ip = document.createElement("h3");
  ip.classList.add("ip");
  ip.textContent = data.sorgu;
  cardInfo.appendChild(ip);

  const ulke = document.createElement("p");
  ulke.classList.add("ulke");
  ulke.textContent = data.ülke;
  cardInfo.appendChild(ulke);

  const enlemBoylam = document.createElement("p");
  enlemBoylam.textContent = "Enlem: " + data.enlem + " Boylam: " + data.boylam;
  cardInfo.appendChild(enlemBoylam);

  const sehir = document.createElement("p");
  sehir.textContent = "Şehir: " + data.şehir;
  cardInfo.appendChild(sehir);

  const saatDilimi = document.createElement("p");
  saatDilimi.textContent = "Saat dilimi: " + data.saatdilimi;
  cardInfo.appendChild(saatDilimi);

  const paraBirimi = document.createElement("p");
  paraBirimi.textContent = "Para birimi: " + data.parabirimi;
  cardInfo.appendChild(paraBirimi);

  const isp = document.createElement("p");
  isp.textContent = "ISP: " + data.isp;
  cardInfo.appendChild(isp);

  card.appendChild(cardInfo);

  return card;
}

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
	
	
*/
const cards = document.querySelector("cards");
/*axios
  .get("https://apis.ergineer.com/ipgeoapi/195.174.128.211")
  .then((response) => {
    cards.appendChild(cardFunc(response.data));
    console.log(response.data);
  })
  .catch((error) => console.log(error));*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/
const adim5 = async function () {
  await ipAdresimiAl();
  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then((response) => {
      cards.appendChild(cardFunc(response.data));
    })
    .catch((error) => console.log(error));
};
adim5();

//kodlar buraya gelecek
