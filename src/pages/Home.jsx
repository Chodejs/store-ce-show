import { useState } from 'react'; // Don't forget this import!
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    // Start by showing 9 items
    const [visibleCount, setVisibleCount] = useState(9);

    // Fetching the products
    const { data, loading, error, refetch } = useFetch('/products'); 

    const processedData = data
        ?.filter((item) => {
            return item.price <= 200; 
        })
        .sort((a, b) => {
            return a.price - b.price; 
        }) || []; // Fallback to empty array if data is null

    const visibleItems = processedData.slice(0, visibleCount);

    // The "Load More" magic
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    return (
        <section>
            <h1>Shop @ Your Leisure | We Accept Credit or Souls</h1>
            <p>All of our new products!!!</p>

            {/* List of Items */}
            <ul className={styles.itemsUl}>
                {visibleItems.map((item, index) => (
                    <li key={item.id || index} className={styles.itemsLi}>
                        <img src={item.image} alt={item.title} className={styles.itemsImage}/>
                        <p><span className={styles.itemsSpan}>Buy Now | </span><strong>${item.price}</strong></p>
                        <h3 className={styles.itemsTitle}>{item.title}</h3>
                        <p className={styles.itemsDescription}>{item.description.slice(0, 150)}....<Link to={'/'}>Show More</Link></p>
                    </li>
                ))}
            </ul>

            {processedData.length > visibleCount && (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button onClick={handleLoadMore} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Load More ({processedData.length - visibleCount} remaining)
                    </button>
                </div>
            )}

            <div style={{ marginTop: '3rem', padding: '1rem', border: '1px dashed #ccc', fontSize: '0.8rem' }}>
                <h3>API Test Zone</h3>
                {loading && <p>Loading data...</p>}
                {error && <button onClick={refetch}>Retry Fetch</button>}
            </div>
            {data && (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
        </section>
    );
}