import Button from "./button";
import CityList from "../helper/cities";
import { MyContext } from "../context/app-context";
import { useContext, useState } from "react";

const Modal = () => {
  const closeModal = () => {
    document.querySelector(".modal")?.close();
    setSearchInput("");
    document.querySelector("#search-bar").value = "";
  };
  const context = useContext(MyContext);
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    const searchBox = document.querySelector("#search-bar");
    setSearchInput(searchBox.value);
  };

  return (
    <>
      <dialog className="modal">
        {/* modal background to close modal on clicking on background */}
        <div onClick={closeModal} className="modal-background">
          {" "}
        </div>
        {/* modal main body */}
        <div className="modal-main">
          <div className="modal-header">
            <h3>Choose cities</h3>
            <Button
              handleClick={() => {
                document.querySelector(".modal").close();
              }}
              name="×"
            />
          </div>
          <div className="modal-body">
            <input id="search-bar" onChange={search} />
            <div className="modal-list">
              {CityList.map((e) => {
                if (
                  !context.selectedCities.includes(e.name) &&
                  e.name.toLowerCase().includes(searchInput)
                )
                  return (
                    <div
                      onClick={() =>
                        context.setSelectedCities([
                          ...context.selectedCities,
                          e.name,
                        ])
                      }>
                      {e.name}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
