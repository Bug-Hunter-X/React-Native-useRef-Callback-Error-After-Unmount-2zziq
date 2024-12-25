import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default MyComponent; 