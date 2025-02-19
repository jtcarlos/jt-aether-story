"use client"
import { Button, Stack } from "aether-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons"

import "./HomeComponent.css"

export type ComponentSampleType = { image: string; component: string }

export interface HomeComponentProps {
  title: string
  description: string
  samples: ComponentSampleType[]
}

/**
 * @description renders the component section in home page
 *
 * @param {string} title title to display in the component section
 * @param {string} description to display in the component section
 * @param {ComponentSampleType[]} samples samples to display in the section
 * @param {Function} callback callback when section call to action is clicked
 * @returns
 */
const HomeComponent: React.FC<HomeComponentProps> = ({ title, description, samples }) => {
  return (
    <Stack justify="between" align="stretch" className="component-container flex-col lg:flex-row p-6 rounded-lg">
      <Stack className="mb-6 lg:mb-0">
        <h4 className="text-lg font-medium text-text">{title} Components</h4>
        <p className="my-2 xl:w-[25rem]">{description}</p>

        <Button variant="primary" icon={{ right: faLongArrowRight }} onClick={() => {}}>
          View all components
        </Button>
      </Stack>

      <Stack className="flex-col lg:flex-row justify-stretch items-stretch">
        {samples?.map((sample, index) => (
          <button key={index} className="bg-white h-[14rem] lg:h-auto min-w-[14rem] border border-[#EBEAEA] rounded-lg">
            <Stack align="stretch" gap="gap-0" className="h-[100%]">
              <Stack className="grow" align="center" justify="center">
                <img src={sample?.image} alt={`${title} component image`} width={125} />
              </Stack>
              <p className="p-3 border-t">{sample?.component} Component</p>
            </Stack>
          </button>
        ))}
        <button className="bg-white h-[14rem] lg:h-auto min-w-[14rem] border border-[#EBEAEA] rounded-lg">
          <Stack align="center" justify="center" className="h-[100%]">
            <FontAwesomeIcon className="text-xl" icon={faLongArrowRight} />
            <p>
              View all {title?.toLowerCase()} <br /> components
            </p>
          </Stack>
        </button>
      </Stack>
    </Stack>
  )
}

export default HomeComponent
