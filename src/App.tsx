import { ReactHTMLElement, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ColorInput } from "./ColorInput";
import { RangeInput } from "./RangeInput";

export default function App() {
  const [topLeftRadius, setTopLeftRadius] = useState<number>(20);
  const [topRightRadius, setToprighttRadius] = useState<number>(20);
  const [bottomLeftRadius, setBottomLeftRadius] = useState<number>(20);
  const [bottomRightRadius, setBottomRightRadius] = useState<number>(20);
  const [boxColor, setBoxColor] = useState<string>("#000000");
  const [boxShadow, setBoxShadow] = useState<boolean>(false);
  const [boxShadowOffsetX, setBoxShadowOffsetX] = useState<number>(0);
  const [boxShadowOffsetY, setBoxShadowOffsetY] = useState<number>(0);
  const [boxShadowOffsetBlurRadius, setBoxShadowOffsetBlurRadius] =
    useState<number>(0);
  const [boxShadowSpreadRadius, setBoxShadowSpreadRadius] = useState<number>(0);
  const [boxShadowColor, setBoxShadowColor] = useState<string>("#656565");
  const [boxShadowInset, setBoxShadowInset] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);

  const handleTopLeftRadiusChange = useCallback((newValue: number) => {
    setTopLeftRadius(newValue);
  }, []);

  const handleTopRightRadiusChange = useCallback((newValue: number) => {
    setToprighttRadius(newValue);
  }, []);

  const handleBottomLeftRadiusChange = useCallback((newValue: number) => {
    setBottomLeftRadius(newValue);
  }, []);

  const handleBottomRightRadiusChange = useCallback((newValue: number) => {
    setBottomRightRadius(newValue);
  }, []);

  const handleColorChange = useCallback((newValue: string) => {
    setBoxColor(newValue);
  }, []);

  const handleOpacityChange = useCallback((newValue: number) => {
    setOpacity(newValue);
  }, []);

  const handleBoxShadowChange = useCallback(() => {
    setBoxShadow(!boxShadow);
  }, [boxShadow]);

  const handleBoxShadowOffsetXChange = useCallback((newValue: number) => {
    setBoxShadowOffsetX(newValue);
  }, []);

  const handleBoxShadowOffsetYChange = useCallback((newValue: number) => {
    setBoxShadowOffsetY(newValue);
  }, []);

  const handleBoxShadowOffsetBlurRadiusChange = useCallback(
    (newValue: number) => {
      setBoxShadowOffsetBlurRadius(newValue);
    },
    []
  );

  const handleBoxShadowSpreadRadiusChange = useCallback((newValue: number) => {
    setBoxShadowSpreadRadius(newValue);
  }, []);

  const handleBoxShadowColorChange = useCallback((newValue: string) => {
    setBoxShadowColor(newValue);
  }, []);

  const handleBoxShadowInsetChange = useCallback(() => {
    setBoxShadowInset(!boxShadowInset);
  }, [boxShadowInset]);

  return (
    <div className="App">
      <Header>
        <h1>CSS preview</h1>
      </Header>
      <Body>
        <PreviewContainer>
          <Preview
            color={boxColor}
            topLeftRadius={topLeftRadius}
            topRightRadius={topRightRadius}
            bottomRightRadius={bottomRightRadius}
            bottomLeftRadius={bottomLeftRadius}
            boxShadow={boxShadow}
            boxShadowOffsetX={boxShadowOffsetX}
            boxShadowOffsetY={boxShadowOffsetY}
            boxShadowOffsetBlurRadius={boxShadowOffsetBlurRadius}
            boxShadowSpreadRadius={boxShadowSpreadRadius}
            boxShadowColor={boxShadowColor}
            boxShadowInset={boxShadowInset ? "inset" : ""}
            opacity={opacity}
          />
        </PreviewContainer>
        <EditContainer>
          <PreviewColorInput
            name={"Box Color"}
            value={boxColor}
            onChange={handleColorChange}
          />
          <h2>Radius:</h2>
          <RangeInput
            name="Top Left"
            value={topLeftRadius}
            onChange={handleTopLeftRadiusChange}
          />
          <RangeInput
            name="Top Right"
            value={topRightRadius}
            onChange={handleTopRightRadiusChange}
          />
          <RangeInput
            name="Bottom Right"
            value={bottomRightRadius}
            onChange={handleBottomRightRadiusChange}
          />
          <RangeInput
            name="Bottom Left"
            value={bottomLeftRadius}
            onChange={handleBottomLeftRadiusChange}
          />
          <h2>Opacity:</h2>
          <RangeInput
            name="Opacity"
            value={opacity}
            step={0.1}
            maxValue={1}
            onChange={handleOpacityChange}
          />
          <h2>Box Shadow:</h2>
          <input type="checkbox" onChange={handleBoxShadowChange} />
          {boxShadow && (
            <>
              <RangeInput
                name="Offset X"
                value={boxShadowOffsetX}
                onChange={handleBoxShadowOffsetXChange}
              />
              <RangeInput
                name="Offset Y"
                value={boxShadowOffsetY}
                onChange={handleBoxShadowOffsetYChange}
              />
              <RangeInput
                name="Offset Blur Radius"
                value={boxShadowOffsetBlurRadius}
                onChange={handleBoxShadowOffsetBlurRadiusChange}
              />
              <RangeInput
                name="Spread Radius"
                value={boxShadowSpreadRadius}
                onChange={handleBoxShadowSpreadRadiusChange}
              />
              <ColorInput
                name={"Shadow Color"}
                value={boxShadowColor}
                onChange={handleBoxShadowColorChange}
              />
              <label>Inset ?</label>
              <input type="checkbox" onChange={handleBoxShadowInsetChange} />
            </>
          )}
        </EditContainer>
      </Body>
    </div>
  );
}

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Body = styled.body`
  background-color: #282c34;
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PreviewColorInput = styled(ColorInput)`
  width: 150px;
`;

const PreviewContainer = styled.div`
  padding-top: 2vh;
  background-color: white;
  height: 80vh;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const EditContainer = styled.div`
  padding-top: 2vh;
  background-color: grey;
  height: 80vh;
  width: 50vh;
  display: flex;
  row-gap: 0.5vh;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Preview = styled.div<{
  color: string;
  topLeftRadius: number;
  topRightRadius: number;
  bottomLeftRadius: number;
  bottomRightRadius: number;
  boxShadow: boolean;
  boxShadowOffsetX: number;
  boxShadowOffsetY: number;
  boxShadowOffsetBlurRadius: number;
  boxShadowSpreadRadius: number;
  boxShadowColor: string;
  boxShadowInset: string;
  opacity: number;
}>`
  width: 60%;
  height: 60%;
  background-color: ${({ color }) => `${color}`};
  opacity: ${({ opacity }) => `${opacity}`};
  border-radius: ${({
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    bottomRightRadius,
  }) =>
    `${topLeftRadius}% ${topRightRadius}% ${bottomRightRadius}% ${bottomLeftRadius}%`};
  box-shadow: ${({
    boxShadow,
    boxShadowOffsetX,
    boxShadowOffsetY,
    boxShadowOffsetBlurRadius,
    boxShadowSpreadRadius,
    boxShadowColor,
    boxShadowInset,
  }) =>
    boxShadow &&
    `${boxShadowInset} ${boxShadowOffsetX}px ${boxShadowOffsetY}px ${boxShadowOffsetBlurRadius}px ${boxShadowSpreadRadius}px ${boxShadowColor}`};
`;
