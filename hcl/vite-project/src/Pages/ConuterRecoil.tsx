import { useRecoilState } from "recoil";
import { counterState } from "../state/recoil/counterAtom";
import { Button, Grid, Typography } from "@mui/material";
const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const incrementByAmount = (amount: number) => setCount(count + amount);

  const asyncIncrement = async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    setCount((prev) => prev + amount);
  };

  return (
    <Grid>
      <Typography variant="h2">Count: {count}</Typography>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={() => incrementByAmount(5)}>Increment by 5</Button>
      <Button onClick={() => asyncIncrement(5)}>Increment Async (+5)</Button>
    </Grid>
  );
};

export default Counter;
