import { useSpring, SpringValue, AnimatedProps } from '@react-spring/web';

interface FadeInSpring {
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
}

export function useFadeInSpring(): FadeInSpring {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 170, friction: 20 },
  });

  return styles;
}