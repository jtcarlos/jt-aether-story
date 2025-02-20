import { Container, Stack } from "aether-ui"

const HomeSubscribe: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] my-[6rem] p-8">
      <Container>
        <Stack direction="row" gap="gap-14">
          <img src="./subscribe-mail.svg" width={200} />
          <Stack>
            <h4 className="text-primary font-semibold text-2xl">Subscribe and Stay Updated</h4>
            <p>Get the latest updates and features about Aether UI by subscribing to our newsletter</p>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}

export default HomeSubscribe
