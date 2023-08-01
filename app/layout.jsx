import "../styles/global.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Sergio's Portifolio",
  description: "This is my portifolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <head></head>
        <body>
          <main
            className="app"
            style={{
              backgroundImage: `url("/images/grid.svg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
            }}
          >
            {children}
          </main>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
