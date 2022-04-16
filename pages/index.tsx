import { NextPage } from "next";
import About from "../compontents/About";
import Contact from "../compontents/Contact";
import ContactHeader from "../compontents/Contact/Header";
import FeaturedPost from "../compontents/FeaturedPost";
import FeaturedPostHeader from "../compontents/FeaturedPost/Header";
import Grid from "../compontents/Grid/Grid";
import GridBackgroundCols from "../compontents/Grid/GridBackgroundCols";
import GridEmptyRow from "../compontents/Grid/GridEmptyRow";
import HomeHeader from "../compontents/Home/Header";
import HomeMessage from "../compontents/Home/Message";
import Layout from "../compontents/Layout";
import Nav from "../compontents/Navigation";
import Skills from "../compontents/Skills";
import SkillsHeader from "../compontents/Skills/Header";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid>
        <Nav />
        <GridEmptyRow height={"10rem"} />
        <HomeHeader />
        <HomeMessage />
        <GridEmptyRow height={"10rem"} />
        <About />
        <GridEmptyRow height={"5rem"} />
        <GridEmptyRow height={"5rem"} />
        <SkillsHeader />
        <GridEmptyRow height={"3rem"} />
        <Skills />
        <GridEmptyRow height={"5rem"} />
        <GridEmptyRow height={"5rem"} />
        <FeaturedPostHeader />
        <GridEmptyRow height={"3rem"} />
        <FeaturedPost />
        <GridEmptyRow height={"5rem"} />
        <GridEmptyRow height={"5rem"} />
        <ContactHeader />
        <GridEmptyRow height={"3rem"} />
        <Contact />
        <GridEmptyRow height={"10rem"} />
      </Grid>
      <GridBackgroundCols />
    </Layout>
  );
};

export default Home;
