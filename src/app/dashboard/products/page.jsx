import Image from "next/image";
import Link from "next/link";
import styles from "../../components/ui/dashboard/products/products.module.css";


const ProductsPage = async () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        
      <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
         
            <tr >
              <td>
                <div className={styles.product}>
                  <Image
                    src= "/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  mm
                </div>
              </td>
              <td>desc</td>
              <td>$5</td>
              <td>416</td>
              <td>stock</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/products/32`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
        
        </tbody>
      </table>
     
    </div>
  );
};

export default ProductsPage;