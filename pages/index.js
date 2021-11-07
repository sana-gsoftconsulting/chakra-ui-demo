import styles from "../styles/Home.module.css";
import { Stack } from "@chakra-ui/react";
import Card from "../components/card";
import Head from "../components/head";

const author = {
  name: "Ralph Edwards",
  profilePictureUrl: "https://bit.ly/dan-abramov",
};

const post = {
  time: "3h ago",
  content: `Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.`,
  description:
    "Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in. ",
  author: author,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Stack spacing={8}>
          <Card post={post} />
        </Stack>
      </main>
    </div>
  );
}
