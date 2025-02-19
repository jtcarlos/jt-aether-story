import { Fragment } from "react"
import { Container, Stack } from "aether-ui"

import HomeBanner from "@home/HomeBanner"
import HomeFeature from "@home/HomeFeature"
import HomeComponent from "@components/Home/HomeComponent"

import { features } from "@home/utils/features.utils"
import { components } from "@home/utils/components.utils"

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeBanner />
      <Container>
        <Stack justify="between" className="flex-col md:flex-row my-[7rem]" gap="gap-[5rem]">
          {features?.map((feature, index) => (
            <HomeFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </Stack>
        {components?.map((component, index) => (
          <div className="mb-10">
            <HomeComponent
              key={index}
              title={component.title}
              description={component.description}
              samples={component.samples}
            />
          </div>
        ))}
      </Container>
    </Fragment>
  )
}

export default Home
