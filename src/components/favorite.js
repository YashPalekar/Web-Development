import { useContext } from "react";
import { MyContext } from "../context/app-context";
// import { useEffect } from "react";

const FavIcon = (props) => {
  const context = useContext(MyContext);
  // useEffect(() => {
  //   console.log(context.favoriteCities, "from use eff");
  // }, [context.favoriteCities]);

  const toggleFavorite = (favName) => {
    const icon = document.getElementById(favName);
    // console.log("in fav.js ", context.favoriteCities);

    if (context.favoriteCities.includes(favName)) {
      const index = context.favoriteCities.indexOf(favName);
      icon.classList.remove("fa-solid", "fa-yellow");
      let temp = context.favoriteCities;
      temp.splice(index, 1);
      context.setFavoriteCities(temp);
    } else {
      icon.classList.add("fa-solid", "fa-yellow");
      context.setFavoriteCities([...context.favoriteCities, favName]);
    }
    // console.log("in fav.js end", context.favoriteCities);
  };

  return (
    <>
      <i
        id={props.cityName}
        onClick={() => {
          toggleFavorite(props.cityName);
          props.handleClick();
        }}
        className={`${props.customClass ?? ""} ${
          context.favoriteCities.includes(props.cityName)
            ? "fa-star fa-solid fa-regular fa-yellow"
            : "fa-star fa-regular"
        }`}></i>
    </>
  );
};

export default FavIcon;
