/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";
import reactLogo from "assets/react-logo.webp";
import logoName from "assets/tue-truong-software-engineer-da-nang.png";
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
        // animate={{
        //   rotate: [0, 360],
        // }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 12,
        //   ease: "linear",
        // }}
        css={
          {
            // width: 54,
          }
        }
      >
        <Image
          src={logoName}
          alt="startup landing logo"
          css={{
            height: 54,
            width: 94,
            objectFit: "cover",
            margin: "4px auto",
            display: "block",
          }}
        />
      </motion.div>
      {/* <Text as="h3" css={{ marginLeft: 8 }}>
        Tue Truong
      </Text> */}
    </Link>
  );
}
