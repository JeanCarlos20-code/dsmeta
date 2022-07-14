import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import NotificationButton from "./components/NotificationButton" //exporta a função do arquivo index.tsx do notificationButton
//componente é um pedaço de codigo que pode ser reaproveitado
//main fica sendo a estrutura da página
function App() {
  return ( //<> serve para retornar mais de uma tag
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
