/**
 * Styled JSXの練習
 */
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">ccc</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #3f3f3f;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d88fd;
        }
        .button {
          background-color: #aad3d1;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #3d88fd;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
