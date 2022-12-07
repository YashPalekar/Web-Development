import { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import Content from "../components/content";
import FavIcon from "../components/favorite";
import Header from "../components/header";
import Modal from "../components/modal";
import { MyContext } from "../context/app-context";
import CityList from "../helper/cities";
const Home = () => {
  const context = useContext(MyContext);
  const [favCities, setFavCities] = useState(
    CityList.filter((e) => context.favoriteCities.includes(e.name))
  );

  useEffect(() => {
    setFavCities(
      CityList.filter((e) => context.favoriteCities.includes(e.name))
    );
  }, [context.favoriteCities]);
  return (
    <>
      <div className="wrapper-column">
        <Header title="My favorite cities" />
        <Content>
          {favCities.length < 1 ? (
            <div className="description">
              <h3>No Cities Selected yet.</h3>
            </div>
          ) : (
            favCities.map((e) => {
              return (
                <Card customClass="card small-card">
                  <h1>{e.temp}</h1>
                  <div>
                    <h3>{e.name}</h3>
                    <p>{e.humidity}</p>
                    <p>{e.desc}</p>
                  </div>
                  <FavIcon
                    handleClick={
                      () =>
                        setFavCities(
                          CityList.filter((e) =>
                            context.favoriteCities.includes(e.name)
                          )
                        )
                      // alert("0")
                    }
                    cardId={e.name}
                    customClass="fav-btn fa-solid fa-yellow"
                    cityName={e.name}
                  />
                </Card>
              );
            })
          )}
        </Content>
        ;<Modal></Modal>
      </div>
    </>
  );
};

export default Home;
