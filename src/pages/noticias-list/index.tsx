import Link from 'next/link';
import styles from '../../styles/Home.module.css';

interface List {
  list: [];
}

interface Item {
  id?: string;
  attributes?: any;
}

export default function PageNoticias({ list }: List) {

  return (
    <>
      <Link href={'/'}>Home</Link>
      <div className={styles.main}>
        <h1>Notícias</h1>

        <ul>
          {list.map((item: Item) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <a href={`/noticia/${item.id}`}>
                <p>{item.attributes.title}</p>
                <p>{item.attributes.description}</p>
              </a>
            </li>
          ))}
        </ul>

      </div>

    </>
  )

}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/noticias');
  const data = await res.json();
  
  return {
    props: {
      list: data.list.data
    }
  }
}