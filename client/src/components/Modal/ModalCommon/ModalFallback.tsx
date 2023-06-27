import { Backdrop, Box } from "@components/common";

export default function ModalFallback() {
  return (
    <Backdrop>
      <Box style={{ backgroundColor: "white", width: "80vw", height: "90vh" }}>
        Loading...
      </Box>
    </Backdrop>
  );
}
