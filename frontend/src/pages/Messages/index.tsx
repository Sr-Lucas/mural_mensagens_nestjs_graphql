import React, { useMemo } from "react";
import { Content, Input } from "../Home/styles";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Container, Message } from "./styles";

type Props = {
  history: History;
};

interface IMessage {
  id: number;
  content: string;
  user: {
    email: string;
  };
}

export const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`;

const Board: React.FC<Props> = ({ history }) => {
  const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      {data?.getMessages.map((message) => (
        <Message key={message.id}>
          <p>{message.content}</p>
          <span>{message.user.email}</span>
        </Message>
      ))}
    </Container>
  );
};

export default Board;
