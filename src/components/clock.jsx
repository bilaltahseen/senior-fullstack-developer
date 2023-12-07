import React, { useEffect } from "react";
import styles from "@/styles/clock.module.css";
import Image from "next/image";
import MinuteHand from "../../public/assets/minute-hand.png";
import HourHand from "../../public/assets/hour-hand.png";
import Ticks from "../../public/assets/ticks.png";

const Clock = () => {
  const [degMin, setDegMin] = React.useState(0);
  const [degHour, setDegHour] = React.useState(0);
  
  useEffect(() => {
    setInterval(() => {
      const mintues = new Date().getMinutes();
      const hours = new Date().getHours();
      setDegMin(mintues / 60);
      setDegHour(hours / 60);
    }, 60000);
  }, [degMin]);
  return (
    <div className={styles.clock}>
      <Image src={Ticks} layout="fixed" className={styles.ticks} width={344} height={344} />
      <Image src={MinuteHand} layout="fixed" className={styles.minutehand} style={{transform:`rotateZ(${degMin}deg)`}}  width={200} height={200} />
      <Image src={HourHand} layout="fixed" className={styles.hourhand} style={{transform:`rotateZ(${degHour}deg)`}}  width={100} height={150} />
    </div>
  );
};

export default Clock;
