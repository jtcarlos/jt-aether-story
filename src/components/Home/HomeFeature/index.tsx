import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Stack } from "aether-ui"
import React from "react"

interface HomeFeatureProps {
  icon: IconDefinition
  title: string
  description: string
}

/**
 * @description renders the feature component in the home section
 *
 * @param {IconDefinition} icon icon to be displayed in the feature
 * @param {string} title title header of the feature
 * @param {string} description description of the feature
 */
const HomeFeature: React.FC<HomeFeatureProps> = ({ icon, title, description }) => {
  return (
    <div>
      <Stack
        align="center"
        justify="center"
        className="inline-block w-[3rem] h-[3rem] rounded border-4 border-primary p-2"
      >
        <FontAwesomeIcon className="text-primary text-2xl" icon={icon} />
      </Stack>
      <h3 className="font-bold text-xl text-secondary my-3">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HomeFeature
