import styled from "@emotion/styled";
import { ReactNode } from "react";
import Calendar from "./Calendar";

const icons = {
  Calendar: <Calendar />,
};

export default {
  title: "UI/Icons",
};

const Wrapper = styled.div`
  display: flex;
  flexwrap: wrap;
  gap: 10px;
`;

const Item = styled.div`
  width: 100%;
  font-size: 40px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 18px;
`;

const renderIcons = (icons: { [key: string]: ReactNode }) => {
  const allIcons = [];
  for (const icon in icons) {
    allIcons.push(
      <div key={Math.random()}>
        <Item>{icons[icon]}</Item>
        <Icon>{icon}</Icon>
      </div>
    );
  }

  return allIcons.map((item) => item);
};

const Template = () => {
  return <Wrapper>{renderIcons(icons)}</Wrapper>;
};

export const All = Template.bind({});
