import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Footer,
  Text,
  Button,
  Container,
  Card,
} from "@mantine/core";
import { useEffect, useState } from "react";
import _ from "lodash";
import * as Activities from '../components/Activities'

const Home: NextPage = () => {
  const [activity, setActivity] = useState("Spin to get the party started!");
  const [degree, setDegree] = useState(0);
  
  const [wheel, setWheel] = useState();

  // useEffect(() => {
  //   const newdeg = degree + 1 < 360 ? degree + 1 : 0;
  //   setDegree(newdeg);
  // }, [degree]);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <div>Hello</div>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <div>Nigel Wheel</div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Card
          component="span"
          style={{ fontFamily: "Greycliff CF, sans-serif" }}
        >
          {activity}
        </Card>
      </Container>
      <Container>
        <Button
          onClick={() => {
            // @ts-ignore
            setActivity(_.sample(Activities));
          }}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: degree }}
        >
          Spin
        </Button>
      </Container>
    </AppShell>
  );
};

export default Home;
