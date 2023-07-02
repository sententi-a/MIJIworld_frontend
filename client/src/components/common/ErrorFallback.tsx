import { Text, Button, Box } from "@components/common";

interface ErrorFallbackProps {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  //   console.log(error);
  return (
    <>
      <Box style={{}}>
        <Text text={"⚠️ 데이터를 불러올 수 없습니다."} bold={true} size="t3" />
        <Text text={"새로고침을 하거나 잠시 후 다시 접속해주세요."} />
        <Button
          onClick={resetErrorBoundary}
          label={"새로고침"}
          style={{ marginTop: "2vh" }}
        />
      </Box>
    </>
  );
}
