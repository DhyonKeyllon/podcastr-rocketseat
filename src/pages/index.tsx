// SPA 
// SSR
// SSG



export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// entrega a mesma requisicao para todos os clientes, ou seja, não precisa fazer uma nova requisição toda vez que um cliente solicitar. Aumentando a perfomance do site. SSG (Static Site Generation)
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    // atualiza entrega de pagina de 8 em 8 horas
    revalidate: 60 * 60 * 8,
  }
}