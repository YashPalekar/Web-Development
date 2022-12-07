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
  };

  return (
    <>
      <i
        id={props.cityName}
        onClick={() => {
          toggleFavorite(props.cityName);
          if (props.handleClick) props.handleClick();
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
