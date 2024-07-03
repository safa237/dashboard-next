import styles from '../../ui/dashboard/users/users.module.css';
import Image from "next/image";
import Link from "next/link";


const UsersPage = async () => {


  return (
    <div className={styles.container}>
      <div className={styles.top}>
       
      <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
      
            <tr >
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  safa
                </div>
              </td>
              <td>email</td>
              <td>14</td>
              <td>admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/users/1`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                  </button>
                  
                </div>
              </td>
            </tr>
        
        </tbody>
      </table>



    </div>
  );
};

export default UsersPage;