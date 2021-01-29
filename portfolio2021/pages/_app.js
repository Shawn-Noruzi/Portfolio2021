import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/AnimatedButton.scss";
/*will only render one component at a time. 
The exiting component will finished its exit animation before the entering component is rendered.
*/
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        transition:{ delay: 1 }

      }}
    >
      <Component {...pageProps} />;
    </motion.div>
  );
}

export default MyApp;
