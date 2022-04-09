import { Button, Card, Text } from "@mantine/core";
import _ from 'lodash';

const BaseActivity = (props: any) => <Card style={{ color: 'ffffff' }}>
    {props.children}
</Card>

const otherplayers = (activeplayer: number, players: string[]) => players.filter(x => x != players[activeplayer]);

export const Art = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    return <BaseActivity>
        <div><h1>Art</h1></div>
        Draw something, anything! On paper, on anyone, on anything!

    </BaseActivity>
};

export const SexyDice = (props: any) => {
    const { players, activeplayer } = props;
    const otherPlayer = _.sample(otherplayers(activeplayer, players))
    const actions = _.sample(["Grab", "Touch", "Fondle", "Pet", "Pat", "Bodyshot", "Lick", "Kiss", "Choke", "Nibble", "Caress", "Blow", "Eat food"]);
    const bodyparts = _.sample(["arm", "face", "lips", "shoulder", "neck", "bellybutton", "crotch", "ass", "neck", "cheek", "leg", "feet", "hair", "finger"]);
    
    return <BaseActivity>
        <div><h1>Sexy Dice</h1></div>
        Sexy Dice! {actions} {otherPlayer}&apos;s {bodyparts}! uwu
    </BaseActivity>
}

export const Trivia = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
    <div><h1>Trivia</h1></div>
    Time to answer some questions. Use JetPunk or Christiana&apos;s JetPunk trivia game.
</BaseActivity>
}

export const Butler = (props: any) => {
    var { players, activeplayer } = props; // todo add types

    // const other = _.sample(players.splice(activeplayer, 1));
    const otherPlayers = otherplayers(activeplayer, players);
    // const otherPlayer = _.sample(players.splice(activeplayer, 1));
    // players.splice(activeplayer, 0, players[activeplayer]);

    return <BaseActivity>
        <div><h1>Butler</h1></div>
        Congrats, {_.sample(otherPlayers)}! You have {players[activeplayer]} as your servant for the next round.
    </BaseActivity>
};


// export const BeerPong = () => <BaseActivity> does it make sense to have this one? </BaseActivity>

export const Roast = (props: any) => {
    const { players, activeplayer } = props; // todo add types

    return <BaseActivity>
        <div><h1>Roast</h1></div>
        Everyone take turns roasting {players[activeplayer]}.
    </BaseActivity>
}


export const Toast = (props: any) => {
    const { players, activeplayer } = props; // todo add types

    return <BaseActivity>
        <div><h1>Toast</h1></div>
        Everyone give {players[activeplayer]} a nice complement.
    </BaseActivity>
}

export const Dare = (props: any) => {
    const { players, activeplayer } = props; // todo add types

    return <BaseActivity>
        <div><h1>Dare</h1></div>
        As a group decide something for {players[activeplayer]} to (voluntarily) do.
    </BaseActivity>
}

export const BlindGuess = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
    <div><h1>Blind Guess</h1></div>
        Blindfold {players[activeplayer]} and place things in their hands and make them guess what it is.
    </BaseActivity>
}

export const Clothing = (props: { minus: boolean }) => {
    return <BaseActivity>
        <div><h1>Change Clothes</h1></div>
        {props.minus ?
            "-1 clothing, Take something off."
            : "+1 clothing, You know what to do."}
    </BaseActivity>
}

export const SwapClothing = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    const otherPlayer = _.sample(otherplayers(activeplayer, players))
    const item = _.sample(['pant/dress/skirt/shorts', 'socks', 'shirt', 'glasses', 'underwear']);

    return <BaseActivity>
        <div><h1>Swap Clothing</h1></div>
        Swap {item} with {otherPlayer}!
    </BaseActivity>
};

const XDrinks = (props: any) => {
    const { gender } = props
    
    return <BaseActivity>
        <div><h1>Drink!</h1></div>
        <Text>
            {gender} drink!
        </Text>
    </BaseActivity>
}

export const BoysDrink = XDrinks({ gender: "Boys" })
export const GirlsDrink = XDrinks({ gender: "Girls" })
export const NonBinaryDrink = XDrinks({ gender: "Nonbinary people" })

export const Rank = (props: any) => {
    const { players, activeplayer } = props; // todo add types

    return <BaseActivity>
        <div><h1>Rank</h1></div>
        Arbitrarily rank your friends according to some arbitrary criterion. We then have to guess what criterion {players[activeplayer]} is ranking by.
    </BaseActivity>
}

export const NeverHaveIEver = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
        <div><h1>Never Have I Ever</h1></div>
        Play Never have I ever, 5 lives.
    </BaseActivity>
}

export const Rant = (props: any) => {
    const { players, activeplayer } = props; // todo add types

    return <BaseActivity>
        <div><h1>Rant</h1></div>
        Rant about anything you&apos;d like, {players[activeplayer]}!
    </BaseActivity>
}

export const Act = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
        <div><h1>Act</h1></div>
        You&apos;ve gotta act this out. Press button for suggestion or the group comes up with one.

        (TODO: make button)
    </BaseActivity>
}

export const GiveMeTen = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
        <div><h1>Give Me 10</h1></div>
        {players[activeplayer]}! Give me 10 of something. Ask the group for a suggestion of an action to perform.
    </BaseActivity>
}


export const Category = (props: any) => {
    const { players, activeplayer } = props;
    const category = _.sample(['operating systems']);
    const player = 'todo select player';
    return <BaseActivity>
        <div><h1>Categories</h1></div>
        {players[activeplayer]} will select a category and go first.
        {players[activeplayer === (players.length - 1) ? 0 : activeplayer + 1]}
        goes second. Keep going until someone fucks up.
    </BaseActivity>
}

export const Truth = (props: any) => {
    const { players, activeplayer } = props;

    return <BaseActivity>
        <div><h1>Truth</h1></div>
        {players[activeplayer]} has to tell the truth.
    </BaseActivity>

}
export const Karaoke = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    // fetch song and lyrics from spotify
    // can get host to login to spotify
    return <BaseActivity>
        <div><h1>Karaoke</h1></div>
        Here are the lyrics. press play and go. JK I haven&apos;t hooked this up to spotify yet. Get someone else to pick the song.
    </BaseActivity>
}

export const TryNotToLaugh = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
        <div><h1>Try Not to Laugh</h1></div>
        Have {players[activeplayer]} put water in ther mouth. Everyone else tries to make them laugh. You have two minutes.
    </BaseActivity>
}


export const Handcuff = (props: any) => {
    const { players, activeplayer } = props; // todo add types
    
    return <BaseActivity>
    <div><h1>Handcuff</h1></div>
    We gotta tie your hands until its your next turn, sorry {players[activeplayer]}.
</BaseActivity>
}

// export default Wheel;
// 
// 
export interface ActivityProps {
    players: string[];
}
const Activities = {
    Art,
    Butler,
    Trivia,
    Toast,
    Roast,
    Dare,
    BlindGuess,
    Clothing,
    SwapClothing,
    XDrinks,
    Rank,
    NeverHaveIEver,
    Rant,
    Act,
    GiveMeTen,
    Category,
    Truth,
    SexyDice,
    Karaoke,
    TryNotToLaugh,
    Handcuff,
}
export default Activities;