import Card from "../components/ui/dashboard/card/card";
import styles from "../components/ui/dashboard/dashboard.module.css";
import Rightbar from "../components/ui/dashboard/rightbar/rightbar";
import Transactions from "../components/ui/dashboard/transactions/transactions";
import Chart from "../components/ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
       
      </div>
      <div className={styles.side}>
       <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;