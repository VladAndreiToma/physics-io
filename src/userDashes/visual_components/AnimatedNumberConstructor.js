import AnimatedNumbers from "react-animated-numbers";

export default function AnimatedNumbersConstructor({ number }) {
  return (
    <AnimatedNumbers
      includeComma
      animateToNumber={number}
      locale="en-US"
      configs={[
        { mass: 1, tension: 220, friction: 100 },
        { mass: 1, tension: 180, friction: 130 },
        { mass: 1, tension: 280, friction: 90 },
      ]}
    />
  );
}
