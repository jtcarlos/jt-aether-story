import { Fragment } from "react"
import { Container, Stack } from "aether-ui"

import HomeBanner from "@home/HomeBanner"
import HomeFeature from "@home/HomeFeature"

import { features } from "@home/utils/features.utils"

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeBanner />
      <Container className="my-[7rem]">
        <Stack justify="between" className="flex-col md:flex-row" gap="gap-[5rem]">
          {features?.map((feature) => (
            <HomeFeature icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </Stack>
      </Container>
    </Fragment>
  )
}

export default Home
