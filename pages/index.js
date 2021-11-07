import styles from "../styles/Home.module.css";
import { Stack } from "@chakra-ui/react";
import Feature from "../components/card";
import Head from "../components/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Stack spacing={8}>
          <Feature
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
          />
        </Stack>
      </main>
    </div>
  );
}
