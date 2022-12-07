import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sider = (props) => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setActiveTab(e);
    console.log(e);
    if (e.toLowerCase() === "home") navigate("/");
    else navigate(`/cities`);
  };

  return (
    <div className="sider">
      {tabs.map((e) => {
        return (
          <div
            className={activeTab === e ? "active" : "items"}
            onClick={() => handleClick(e)}>
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Sider;
