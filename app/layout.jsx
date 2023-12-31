import "../styles/global.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Sergio's Page",
  description: "This is my page",
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
              backgroundRepeat: "no-repeat"
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
