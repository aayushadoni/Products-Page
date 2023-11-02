import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange, handleSort, sortOrder }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} handleSort={handleSort} sortOrder={sortOrder} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
