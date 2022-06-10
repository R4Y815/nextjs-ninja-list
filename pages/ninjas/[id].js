
// first tell next how many html pages will need to be made based on our data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(ninja=>{
    return {
      params: {id: ninja.id.toString() }
    }
  })

  return {
    paths: paths, // paths tell how many html pages to create based on gsPaths
    fallback: false
  }
}

// based on paths returned, fetch each item needed
export const getStaticProps = async (context) => {
  // context objeect is attached automatically 
  // as an object each time gsp runs
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data } // item as props
  }
}

// put the item into the component so that it can be generated
const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  );
}

export default Details