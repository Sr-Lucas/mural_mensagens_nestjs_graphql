import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { History } from "history";
import { Button, Container, Content, Input } from "./styles";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: { email: $email }) {
      id
    }
  }
`;

type Props = {
  history: History;
};

const Home: React.FC<Props> = ({ history }) => {
  const [input, setInput] = useState<string>("");

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

  useEffect(() => {
    if (data) {
      const { createOrLoginUser } = data;
      const { id } = createOrLoginUser;

      history.push(`/messages?id=${id}`);
    }
  }, [data]);

  async function handleRegister(e: React.MouseEvent) {
    e.preventDefault();

    if (input.length < 1) {
      alert("Insert valid e-mail!");
      return;
    }

    createOrLoginUser({ variables: { email: input } });
    setInput("");
  }

  return (
    <div>
      <Container>
        <Content>
          <form>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E-mail"
            />

            <Button onClick={handleRegister}>
              <FaCheck size={36} color="#fff" />
              <span>Login or Register</span>
            </Button>
          </form>
        </Content>
      </Container>
    </div>
  );
};

export default Home;
