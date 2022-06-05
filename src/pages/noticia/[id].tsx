import styles from '../../styles/Home.module.css';
import Link from 'next/link';

interface Info {
  info?: any;
}

export default function PageNoticia({info}: Info) {

  return (
    <>
    <Link href={'/'}>Home</Link>
    
      <div className={styles.main}>
        <h1>Notícia</h1>
        <p>{info.title}</p>
        <p>{info.description}</p>
      </div>
    </>
  )

}

export async function getServerSideProps(context: any) {

  let id = context.params.id;

  const res = await fetch(`http://localhost:3000/api/noticia-id/${id}`);
  const data = await res.json();
  
  return {
    props: {
      info: data.list.data.attributes
    }
  }
}

// export async function getStaticProps(context: any) {

//   let id = context.params.id;

//   const res = await fetch(`http://localhost:3000/api/noticias/noticia-id/${id}`);
//   const data = await res.json();

//   console.log(data);
  
//   return {
//     props: {
//       info: data
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { } }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }