import { Stack } from "@mui/system";
import React from "react";
import { HomeDetail } from "../../features/HomeDetail";
import Slider from "../../features/SlideCard/Slider";

function Home(props) {
  return (
    <>
      <section className="home">
        <div className="container">
          <Stack direction="column" spacing={4}>
            <Slider />
            <HomeDetail />
          </Stack>
        </div>
      </section>
    </>
  );
}

export default Home;
