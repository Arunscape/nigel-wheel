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
  Input,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import Activities, {ActivityProps} from '../components/Activities';


// Ability to remove a player from the list
// Change the order of players in the list (dragging?)
// Hitting spin highlights the next player in the list
// Add a weighting to the activities, based on how lewd they are. A slider can control how often lewd ones come up




const Home: NextPage = () => {

  // const [activity, setActivity] = useState(Activities[0]);
  const [degree, setDegree] = useState(0);
  const [players, setPlayers] = useState(["Nigel"]);
  const [playerName, setPlayerName] = useState("");

  const [wheel, setWheel] = useState();


  // console.log("activity: ", activity);
  // console.log("array: ", Activities);
  // useEffect(() => {
  //
  //   const newdeg = degree + 1 < 360 ? degree + 1 : 0;
  //   setDegree(newdeg);
  // }, [degree]);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <div><h1><b>Players</b></h1></div>

          <div>
            {players.map((p, i) => <div key={i}>{p}</div>)}
          </div>

          <Input value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
          <Button
            onClick={() => {
              setPlayers([...players, playerName]);
              setPlayerName("")
                ;
            }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: degree }}
          >
            Add Player
          </Button>
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
        </Card>
      </Container>
      <Container>
        <Button
          onClick={() => {
            // @ts-ignore
            // setActivity(_.sample(Activities))
            setActivity(Activities[1])
          }}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: degree }}
        >
          Spin
        </Button>
        {/* {Activity} */}
        {/* {activity && activity({ players })} */}
        {/* {activity} */}
        {Activities[0]({players})}
        {/* {activity()} */}
      </Container>
    </AppShell>
  );
};

export default Home;
