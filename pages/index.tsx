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
import Activities from '../components/Activities';


// Ability to remove a player from the list
// Change the order of players in the list (dragging?)
// Hitting spin highlights the next player in the list
// Add a weighting to the activities, based on how lewd they are. A slider can control how often lewd ones come up


const Home: NextPage = () => {

  // const [activity, setActivity] = useState(Activities[0]);
  const [degree, setDegree] = useState(0);
  const [players, setPlayers] = useState(["Nigel"]);
  const [activeplayer, setactiveplayer] = useState(0);

  // for the form to add players
  const [playerName, setPlayerName] = useState("");

  const [wheel, setWheel] = useState();
  const [activity, setActivity] = useState(-1);

  const ActivityFromNum = () => {

    console.log(activity)
    switch (activity) {
      case -1:
        return <div>Spin to get started</div>
      case 0:
        return <Activities.Art />
      case 1:
        return <Activities.Butler players={players} activeplayer={activeplayer} />
      case 2:
        return <Activities.Trivia />
      case 3:
        return <Activities.Toast />
      case 4:
        return <Activities.Roast />
      case 5:
        return <Activities.Dare />
      case 6:
        return <Activities.BlindGuess players={players} activeplayer={activeplayer} />
      case 7:
        return <Activities.Clothing minus={true} />
      case 8:
        return <Activities.Clothing minus={false} />
      case 9:
        return <Activities.SwapClothing players={players} activeplayer={activeplayer} />
      case 10:
        return <Activities.XDrinks gender="Boys" />
      case 11:
        return <Activities.XDrinks gender="Girls" />
      case 12:
        return <Activities.XDrinks gender="Non-binary peeps" />
      case 13:
        return <Activities.Rank />
      case 14:
        return <Activities.NeverHaveIEver />
      case 15:
        return <Activities.Rant />
      case 16:
        return <Activities.Act />
      case 17:
        return <Activities.GiveMeTen />
      case 18:
        return <Activities.Category players={players} activeplayer={activeplayer} />
      case 19:
        return <Activities.Truth activeplayer={activeplayer} />
      case 20:
        return <Activities.SexyDice players={players} activeplayer={activeplayer} />
      case 21:
        return <Activities.Karaoke />
      case 22:
        return <Activities.TryNotToLaugh />
      case 23:
        return <Activities.Handcuff/>
      default:
        return null;
    }
  }


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

          <Input value={playerName} onChange={(e: any) => setPlayerName(e.target.value)} />
          <Button
            onClick={() => {
              setPlayers([...players, playerName]);

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
            setActivity(_.random(23))
          }}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: degree }}
        >
          Spin
        </Button>

        {ActivityFromNum && <ActivityFromNum />}

      </Container>
    </AppShell>
  );
};

export default Home;
