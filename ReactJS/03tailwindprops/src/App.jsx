import Card from './Card'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline" > Tailwind test 1</h1>
      <h1 className="bg-green-400 text-black p-4 rounded-xl" > Tailwind test 2 </h1>
      <Card name='Vinit' para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit blanditiis at, reiciendis esse officia, eius expedita ipsam iusto labore aperiam minus, quam odit velit. Consectetur iure amet debitis maxime!' />
      <Card name='Yesh' para='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit blanditiis at, reiciendis esse officia, eius expedita ipsam iusto labore aperiam minus, quam odit velit. Consectetur iure amet debitis maxime!' />
    </>
  )
}

export default App