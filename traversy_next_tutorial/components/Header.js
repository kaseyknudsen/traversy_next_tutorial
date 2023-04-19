import headerStyles from "../src/styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
    </div>
  );
};

export default Header;
