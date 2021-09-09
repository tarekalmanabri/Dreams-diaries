import { FunctionComponent } from 'react';

type CardProps = {
  title: string;
  content: string;
};

export const Card: FunctionComponent<CardProps> = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
