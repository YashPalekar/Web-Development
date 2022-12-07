import { useContext, useState } from "react";
import Card from "../components/card";
import FavIcon from "../components/favorite";
import Modal from "../components/modal";
import { MyContext } from "../context/app-context";
import CityList from "../helper/cities";

const Cities = () => {
  const [cityDetails, setCityDetails] = useState("");
  const context = useContext(MyContext);

  const openModal = () => {
    document.querySelector(".modal").showModal();
  };
  const showDetails = (e) => {
    const card = document.querySelector(".big-card");
    card.style.display = "block";

    // const toggleFavorite = (favCity) => {
    //   context.setFavoriteCities([...context.favoriteCities, favCity]);
    //   document.querySelector(".fa-star").classList.add("fa-solid");
    // };

    setCityDetails(
      <>
        <div className="card-header">
          <h3>{e.name}</h3>
          {/* <i
            onClick={() => {
              toggleFavorite(e.name);
            }}
            className={
              context.favoriteCities.includes(e.name)
                ? "fa-solid fa-star"
                : "fa-regular fa-star"
            }></i> */}
          <FavIcon cityName={e.name} />
        </div>
        <div className="card-body">
          <p>{e.desc}</p>
          <h3>Temperature : {e.temp}</h3>
          <h3>Humidity : {e.humidity}</h3>
        </div>
      </>
    );
  };

  return (
    <div className="main-body">
      <Card customClass="card">
        <div
          onClick={openModal}
          className="card-header"
          title="Click to add cities">
          <h3>Cities</h3>
          <i className="fa-solid fa-plus card-button open-modal"></i>
        </div>
        <div className="card-list">
          {CityList.map((e) => {
            if (context.selectedCities.includes(e.name))
              return (
                <div onClick={() => showDetails(e)} className="card-list-item">
                  <h3>{e.name}</h3>
                  <p>{e.temp}</p>
                </div>
              );
          })}
        </div>
      </Card>

      <Card customClass="card big-card">{cityDetails}</Card>

      <Modal />
    </div>
  );
};

export default Cities;
