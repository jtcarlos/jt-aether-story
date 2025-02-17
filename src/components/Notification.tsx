import { Stack, Container, Button } from "aether-ui"

interface NotificationProps {
  message: React.ReactNode
  callToAction: string
}

/**
 * @description renders the notification banner on the top of the website
 *
 * @param {React.ReactNode} message contains the message to be displayed on the banner
 * @param {string} callToAction contains the message to be displayed on the call to action button
 */
const Notification: React.FC<NotificationProps> = ({ message, callToAction }) => {
  const GITHUB_REPOSITORY_LINK = "https://github.com/jtcarlos/"

  return (
    <div className="bg-primary text-white">
      <Container>
        <Stack direction="row" align="center" justify="between" className="text-sm py-2">
          {message}
          <Button
            size="xs"
            className="border-primary text-primary hidden md:block"
            onClick={() => window.open(GITHUB_REPOSITORY_LINK, "_blank")}
          >
            {callToAction}
          </Button>
        </Stack>
      </Container>
    </div>
  )
}

export default Notification
