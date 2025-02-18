"use client"
import { useRouter } from "next/navigation"
import { Button, Container, Stack } from "aether-ui"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import "./HomeBanner.css"

/**
 * @description renders the home hero section
 */
const HomeBanner: React.FC = () => {
  const router = useRouter()

  return (
    <Stack className="home-banner border-b-4 border-secondary h-[70vh]" justify="center" align="center">
      <Container>
        <Stack direction="row" justify="between" align="center">
          <Stack>
            <button
              onClick={() => router.push("/changelog")}
              className="rounded-full text-white bg-text text-sm py-[0.10rem]"
            >
              <span className="rounded-full bg-white text-text px-2 ml-[0.20rem] font-semibold">v1.0.0</span>
              <span className="mx-3 font-normal">See what's new</span>
              <FontAwesomeIcon className="mr-[0.40rem] pt-[0.10rem]" icon={faAngleRight} />
            </button>

            <h1 className="text-text font-bold text-3xl 2xl:text-4xl leading-[1.25]">
              A React.js library designed to <br className="hidden lg:block" />{" "}
              <span className="text-primary">elevate your web development</span>
            </h1>

            <p className="max-w-[35rem]">
              Aether UI leverages the power of Tailwind CSS and Fontawesome for effortless and responsive styling,
              providing a cohesive and modern aesthetic components right out of the box.
            </p>

            <Stack direction="row">
              <Button variant="primary">Get Started</Button>
              <Button className="font-normal">npm i aether-iu</Button>
            </Stack>
          </Stack>

          <Stack direction="row" className="hidden lg:flex overflow-y-hidden h-[69.5vh]">
            <div className="w-[383px] h-[3000px]" id="aether-sample-image-1" />
            <div className="hidden xl:block w-[383px] h-[3000px]" id="aether-sample-image-2" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default HomeBanner
