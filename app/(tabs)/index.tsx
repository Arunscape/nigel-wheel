import { Image, StyleSheet, Platform, Button, TextInput, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import Activities from '@/components/Activities';
import _ from "lodash"

export default function HomeScreen() {
  const [degree, setDegree] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [activeplayer, setactiveplayer] = useState(0);

  // for the form to add players
  const [playerName, setPlayerName] = useState("");

  const [wheel, setWheel] = useState();
  const [activity, setActivity] = useState(-1);


  const nextplayer = () => {
    const lastplayer = players.length - 1;
    const i = activeplayer === lastplayer ? 0 : activeplayer + 1;
    setactiveplayer(i);
  }

  // WTF IS THIS GARBAGE
  const ActivityFromNum = () => {

    console.log(activity)
    switch (activity) {
      case -1:
        return <div>Spin to get started</div>
      case 0:
        return <Activities.Art players={players} activeplayer={activeplayer} />
      case 1:
        return <Activities.Butler players={players} activeplayer={activeplayer} />
      case 2:
        return <Activities.Trivia players={players} activeplayer={activeplayer} />
      case 3:
        return <Activities.Toast players={players} activeplayer={activeplayer} />
      case 4:
        return <Activities.Roast players={players} activeplayer={activeplayer} />
      case 5:
        return <Activities.Dare players={players} activeplayer={activeplayer} />
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
        return <Activities.Rank players={players} activeplayer={activeplayer} />
      case 14:
        return <Activities.NeverHaveIEver players={players} activeplayer={activeplayer} />
      case 15:
        return <Activities.Rant players={players} activeplayer={activeplayer} />
      case 16:
        return <Activities.Act players={players} activeplayer={activeplayer} />
      case 17:
        return <Activities.GiveMeTen players={players} activeplayer={activeplayer} />
      case 18:
        return <Activities.Category players={players} activeplayer={activeplayer} />
      case 19:
        return <Activities.Truth players={players} activeplayer={activeplayer} />
      case 20:
        return <Activities.SexyDice players={players} activeplayer={activeplayer} />
      case 21:
        return <Activities.Karaoke players={players} activeplayer={activeplayer} />
      case 22:
        return <Activities.TryNotToLaugh players={players} activeplayer={activeplayer} />
      case 23:
        return <Activities.Handcuff players={players} activeplayer={activeplayer} />
      default:
        return null;
    }
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
      <div>
        {players.map((p, i) => {

          // return <div key={i}><Title order={i === activeplayer ? 1 : 5}
          return <div key={i}>

            <Text>
              {/*
            // style={i === activeplayer ? {
              //   backgroundColor: theme.colors.blue[5]
              // } : undefined}
              // >
              */}
              {p}
            </Text >
            <Button title="Delet" onPress={() => {
              const newplayers = players.filter(x => x != p);
              console.log("removing", p)

              setPlayers(newplayers);
              // if (!isSignedIn) {
              localStorage.setItem("players", JSON.stringify(newplayers));
              return;
              // }

              // const docRef = doc(db, `/users/${firebaseauth.currentUser?.uid}`);
              // await setDoc(docRef, { players: newplayers }, { merge: true });
            }} />
            {/* Delet</Button> */}
          </div>
        })}
      </div>

      <TextInput value={playerName} onChange={(e: any) => setPlayerName(e.target.value)} />
      <Button
        title='Add Payer'
        onPress={() => {
          const newplayers = [...players, playerName]
          setPlayers(newplayers);

          // if (!isSignedIn) {
          localStorage.setItem("players", JSON.stringify(newplayers));
          setPlayerName("");
          return;
          // }

          // const docRef = doc(db, `/users/${firebaseauth.currentUser?.uid}`);

          // await setDoc(docRef, { players: newplayers }, { merge: true });

          // setPlayerName("");

        }}
      />
      {/* // variant="gradient"
      // gradient={{ from: "indigo", to: "cyan", deg: degree }} */}

      {/* Add Player
      </Button> */}
      <Button
        title='Spin!'
        onPress={() => {
          // @ts-ignore
          setActivity(_.random(23))
          nextplayer();
        }} />
      {/* // variant="gradient"
      // gradient={{ from: "indigo", to: "cyan", deg: degree }} 
      >
        Spin
      </Button> */}

      {ActivityFromNum && <ActivityFromNum />}
    </ParallaxScrollView >
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
