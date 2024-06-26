import "./Soups.css";

const soups = [
  {
    title: "Острый вегетарианский суп с черной фасолью",
    image:
      "https://proxy12.online.ua/retsepty/r3-9f59f9f249/small58ba75ddb1b90.png",
  },
  {
    title: "Чечевичный суп",
    image:
      "https://proxy12.online.ua/retsepty/r3-058381bb2a/small5897b855652e7.png",
  },
  {
    title: "Мексиканкий томатный суп",
    image:
      "https://proxy12.online.ua/retsepty/r2-cf2481c872/small58548acae6953.png",
  },
  {
    title: "Суп из брокколи и сыра",
    image:
      "https://proxy12.online.ua/retsepty/r2-26566ca417/small585489ad03aea.png",
  },
  {
    title: "Крем-суп с курицей и брокколи",
    image:
      "https://proxy12.online.ua/retsepty/r3-1a33e5f51c/small5827029293b62.png",
  },
  {
    title: "Сырный суп по-французски и с чесночными гренками",
    image:
      "https://proxy12.online.ua/retsepty/r3-ec499c942f/small57853f28c7ad3.jpg",
  },
  {
    title: "Суп из курицы с вялеными томатами",
    image:
      "https://proxy12.online.ua/retsepty/r3-cac63e0874/small5738e6d8d7b33.jpg",
  },
  {
    title: "Гуляшевка",
    image:
      "https://proxy11.online.ua/retsepty/r3-f4ccdb5364/small5733a0d77be6e.jpg",
  },
  {
    title: "Суп из утки с капустой и грибами",
    image:
      "https://proxy11.online.ua/retsepty/r3-a8c3ac48a8/small5729bd9b52bae.jpg",
  },
];
function Soups() {
  return (
    <>
      <h1>Супы</h1>
      <div>Новые</div>
      <div>Популярные</div>
      <div className="soups-container">
        {soups.map((soup, index) => (
          <div key={index} className="soup-card">
            <img src={soup.image} alt={soup.title} className="soup-image" />
            <h2>{soup.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
export default Soups;
