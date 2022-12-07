import Button from "./button";

const Header = (props) => {
  let { title } = props;
  const openModal = () => {
    document.querySelector(".modal").showModal();
    let color = Math.floor(Math.random() * 1000000 + Math.random() * 100);
    document.querySelector(":root").style.setProperty("--active", `#${color}`);
  };
  return (
    <div className="header">
      <div>{title}</div>
      <div className="header-buttons">
        <div>
          <Button
            customClass="open-modal"
            handleClick={openModal}
            name="Add new city"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
