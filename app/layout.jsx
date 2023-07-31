import "../styles/global.css";

export const metadata = {
  title: "Sergio's Portifolio",
  description: "This is my portifolio"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout