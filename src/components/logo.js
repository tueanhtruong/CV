/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";
import reactLogo from "assets/react-logo.webp";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        css={{
          height: 54,
          width: 54,
        }}
      >
        <Image src={reactLogo} alt="startup landing logo" />
      </motion.div>
      <Text as="h3" css={{ marginLeft: 8 }}>
        Tue Truong
      </Text>
    </Link>
  );
}
