import {useSpring, animated} from "@react-spring/web";

export const Number = ({n, duration}) => {
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10, duration},
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
};
