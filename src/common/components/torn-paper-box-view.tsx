import React, { PropsWithChildren, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  Text
} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

type TornPaperProps = PropsWithChildren & {

}

function TornPaperBox({ children }: TornPaperProps) {

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setBoxSize({ width, height });
  };

  const { width, height } = boxSize;
  const waveHeight = 10;
  const shadowOffset = 7;


  const buildPath = (dx = 0, dy = 0) => width && height
  ? `
    M${0 + dx},${waveHeight + dy}
    Q${width * 0.25 + dx},${0 + dy} ${width * 0.5 + dx},${waveHeight + dy}

    L${width * 0.5 - 3 + dx},${waveHeight + dy}
    L${width * 0.5 + dx},${20 + dy}
    L${width * 0.5 + 15 + dx},${waveHeight + dy}

    T${width + dx},${waveHeight + dy}
    Q${width + dx - 10},${(height + waveHeight) / 2 + dy} ${width + dx},${height - waveHeight + dy}

    Q${width * 0.75 + dx},${height + dy} ${width * 0.5 + dx},${height - waveHeight + dy}
    T${0 + dx},${height - waveHeight + dy}

    T${0 + dx},${height - waveHeight + dy}
    Q${10 + dx},${height / 2 + dy} ${0 + dx},${waveHeight + dy}

    Z
  ` : '';

    return (
      <>
      <View style={{marginTop: 20}} />
      <View style={styles.main} onLayout={onLayout}>
        {width && height && (
          <Svg
            width={width + shadowOffset}
            height={height + shadowOffset}
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            {/* Shadow Path */}
            <Path
              d={buildPath(shadowOffset, shadowOffset)}
              fill="#000"
              opacity={0.8}
            />
            {/* Foreground Wavy Path */}
            <Path
              d={buildPath()}
              fill="#f6f4ec"
              stroke="black"
              strokeWidth={3}
            />
          </Svg>
        )}
  
        <View style={{ padding: 20, zIndex: 2 }}>
          {children}
        </View>
      </View>
      </>
    );
}

export { TornPaperBox }

const styles = StyleSheet.create({
  main: {
    marginLeft: 30,
    marginRight: 30,
  }
});


/*

  const buildPath = (dx = 0, dy = 0) => width && height
    ? `
      M${0 + dx},${waveHeight + dy}
      Q${width * 0.25 + dx},${0 + dy} ${width * 0.5 + dx},${waveHeight + dy}
      T${width + dx},${waveHeight + dy}
      L${width + dx},${height - waveHeight + dy}
      Q${width * 0.75 + dx},${height + dy} ${width * 0.5 + dx},${height - waveHeight + dy}
      T${0 + dx},${height - waveHeight + dy}
      Z
    ` : '';


        ? `
      M${0 + dx},${waveHeight + dy}
      Q${width * 0.25 + dx},${0 + dy} ${width * 0.5 + dx},${waveHeight + dy}
    
      L${width * 0.5 - 3 + dx},${waveHeight + dy}
      L${width * 0.5 + dx},${20 + dy}
      L${width * 0.5 + 15 + dx},${waveHeight + dy}

      T${width + dx},${waveHeight + dy}
      L${width + dx},${height - waveHeight + dy}
      Q${width * 0.75 + dx},${height + dy} ${width * 0.5 + dx},${height - waveHeight + dy}
      T${0 + dx},${height - waveHeight + dy}
      Z
    ` : '';
    


// GOOD BUT NOT GREAT
const buildPath = (dx = 0, dy = 0) => width && height
  ? `
    M${0 + dx},${waveHeight + dy}
    Q${width * 0.25 + dx},${0 + dy} ${width * 0.5 + dx},${waveHeight + dy}

    L${width * 0.5 - 3 + dx},${waveHeight + dy}
    L${width * 0.5 + dx},${20 + dy}
    L${width * 0.5 + 15 + dx},${waveHeight + dy}

    T${width + dx},${waveHeight + dy}
    Q${width + dx - 10},${(height + waveHeight) / 2 + dy} ${width + dx},${height - waveHeight + dy}

    Q${width * 0.75 + dx},${height + dy} ${width * 0.5 + dx},${height - waveHeight + dy}
    T${0 + dx},${height - waveHeight + dy}

    Q${-10 + dx},${(height + waveHeight) / 2 + dy} ${0 + dx},${waveHeight + dy}

    Z
  ` : '';

*/