import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Modal from "components/modal";
import Banner from "sections/banner";
import CtaTwo from "sections/cta-two";
import WorkFlow from "sections/workflow";
import CtaThree from "sections/cta-three";
import FavoriteCourse from "sections/favorite-course";
import ModalImage from "components/modalImage";
import "react-awesome-lightbox/build/style.css";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="I am Tue Truong Front End DEVELOPER based in Da Nang city. My strong points are working independently, being interactive, proactive, and being willing to learn."
              title="Tue Truong - Software Engineer"
            />
            <Banner />
            <FavoriteCourse />
            {/* <PopularCourse /> */}
            <CtaThree />
            <WorkFlow />
            {/* <Pricing /> */}
            <CtaTwo />
            {/* <FAQ /> */}
            {/* <CtaOne /> */}
            <Modal />
            <ModalImage />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
