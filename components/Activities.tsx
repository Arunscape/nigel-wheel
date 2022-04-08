import { Button, Card, Text } from "@mantine/core";
import _ from 'lodash';

// const wheel = [
//     'art',
//     'sexy_dice',
//     'kiss',
//     'jetpunk',
//     'body_shot',
//     'butler',
//     'beer_pong',
//     'roast', // take turns roasting the subject
//     'toast', // complement circle
//     'dare',
//     'blind_guess',
//     '-1_clothing',
//     'swap_clothing',
//     'girls_drink',
//     'boys_drink',
//     'nonbinary_drink',
//     'rank',
//     'never_have_i_ever',
//     'rant',
//     'act',
//     'give_me_10', // pushups or something else
//     'drink',
//     'category',
//     'truth', // hotseat
//     '+1_clothing',
//     'karaoke',
//     'try_not_to_laugh',
//     'handcuff',
//   ];

const BaseActivity = (props: any) => <Card style={{ color: 'ffffff' }}>
    {props.children}
</Card>


export const Art = () => {

    return <BaseActivity>
        <Text>
            Draw something, anything! On paper, on anyone, on anything!
        </Text>

    </BaseActivity>
};

export const SexyDice = (props: any) => {
    
    const actions = ["Grab", "Touch", "Fondle", "Pet", "Pat", "Bodyshot", "Lick", "Kiss", "Choke", "Nibble", "Caress", "Blow", "Eat food"];
    const bodyparts = ["arm", "face", "lips", "shoulder", "neck", "bellybutton", "crotch", "ass", "neck", "cheek", "leg", "feet", "hair", "finger"];
    const actionsRandNum = Math.floor(Math.random() * actions.length);
    const bodypartsRandNum = Math.floor(Math.random() * bodyparts.length);
    return <BaseActivity>
        <div>uWu</div>

        Sexy Dice! {actionsRandNum} on {people}'s {bodypartsRandNum}.

        {/* actions are grab, touch, fondle, pet, pat, bodyshot, lick, kiss, choke, nibble, caress

    body parts are: arm, face, lips, shoulder, neck, bellybutton, ass, neck, cheek, leg, foot/feet, hair, finger */}

    </BaseActivity>
}

export const Trivia = () => <BaseActivity>
    Time to answer some questions. Idk we need to decide on rules. Maybe answer until you get 10 right, answer until you get one wrong?
    <Button>click button for a suggestion if you dont have a trivia question to ask</Button>
</BaseActivity>

export const Butler = (props: any) => {

    const { players, activeplayer } = props; // todo add types

    const other = _.sample(players.splice(activeplayer, 1));

    return <BaseActivity>
        Congrats, {other}! You have a servant and their name is {players[activeplayer]}
    </BaseActivity>
};


// export const BeerPong = () => <BaseActivity> does it make sense to have this one? </BaseActivity>

export const Roast = () => <BaseActivity>Everyone take turns roasting this loser</BaseActivity>


export const Toast = () => <BaseActivity> Everyone give this lovely person a nice complement</BaseActivity>

export const Dare = () => <BaseActivity>As a group decide something for this person to (voluntarily) do</BaseActivity>

export const BlindGuess = () => <BaseActivity>put something in this persons hand and make them guess what it is</BaseActivity>

export const Clothing = (props: { minus: boolean }) => {

    return <BaseActivity>
        {props.minus ?
            "-1 clothing, Take something off"
            : "+1 clothing, You know what to do"}
    </BaseActivity>
}

export const SwapClothing = (props: any) => {

    const { players, activeplayer } = props;
    const other = _.sample(players.splice(activeplayer, 1)) // remember to exclude current player
    const item = _.sample(['pant/dress/skirt/short', 'socks', 'tshirt', 'glasses']);

    return <BaseActivity>
        Swap {item} with {other}
    </BaseActivity>
};

const XDrinks = (props: any) => {
    const {gender} = props
    return <BaseActivity>
        <Text>
            {gender} drink!
        </Text>
    </BaseActivity>
}

export const BoysDrink = XDrinks({ gender: "Boys" })
export const GirlsDrink = XDrinks({ gender: "Girls" })
export const NonBinaryDrink = XDrinks({ gender: "Nonbinary people" })

export const Rank = () => <BaseActivity>Arbitrarily rank your friends according to some arbitrary criterion. We then havbe to guess what youre ranking by</BaseActivity>

export const NeverHaveIEver = () => <BaseActivity>Never have i ever</BaseActivity>

export const Rant = () => <BaseActivity>Rant about anything youd like</BaseActivity>

export const Act = () => <BaseActivity> Youve gotta act this out. Press button for suggestion or the group comes up with one</BaseActivity>

export const GiveMeTen = () => <BaseActivity>Give me 10 of something pushups? Ask group for suggestion or pray to RNGesus and hit the button</BaseActivity>


export const Category = (props: any) => {

    const category = _.sample(['operating systems']);
    const player = 'todo select player';
    return <BaseActivity>
        {player} will select a category and go first. We go clockwise.
    </BaseActivity>
}

export const Truth = (props: any) => {

    const player = 'todo select player';

    return <BaseActivity>
        {player} has to tell the truth. no dare here.
    </BaseActivity>

}
export const Karaoke = () => {

    // fetch song and lyrics from spotify
    // can get host to login to spotify
    return <BaseActivity>
        Here are the lyrics. press play and go
    </BaseActivity>
}

export const TryNotToLaugh = () => <BaseActivity>
    You better not laugh. The timer starts now.
</BaseActivity>


export const Handcuff = (props: any) => <BaseActivity>
    We gotta tie your hands until its your next turn, sorry.
</BaseActivity>

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