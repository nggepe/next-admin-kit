import DashboardExample from "@/examples/dashboard";
import { Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container maxWidth={{ xl: "1300px" }} style={{ padding: "1rem 1rem" }} aria-label='container fluid'>
      <DashboardExample />
    </Container>
  );
}
