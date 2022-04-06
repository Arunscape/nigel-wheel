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


export const Art = (props: ActivityProps) => {

    console.log("art component: ", props.players);

    return <BaseActivity>
        <Text>
            Draw something, anything! On paper, on anyone, on anything!
        </Text>
        {props.players}

    </BaseActivity>
};

export const SexyDice = () => {

    const actions = ["Grab", "Touch", "Fondle", "Pet", "Pat", "Bodyshot", "Lick", "Kiss", "Choke", "Nibble", "Caress", "Blow", "Eat food"];
    const people = [""];
    const bodyparts = ["arm", "face", "lips", "shoulder", "neck", "bellybutton", "crotch", "ass", "neck", "cheek", "leg", "feet", "hair", "finger"];

    return <BaseActivity>
        <div>uWu</div>

        Sexy Dice! {actions} on {people}'s {bodyparts}.

        {/* actions are grab, touch, fondle, pet, pat, bodyshot, lick, kiss, choke, nibble, caress

    body parts are: arm, face, lips, shoulder, neck, bellybutton, ass, neck, cheek, leg, foot/feet, hair, finger */}

    </BaseActivity>
}

export const Trivia = () => <BaseActivity>
    Time to answer some questions. Idk we need to decide on rules. Maybe answer until you get 10 right, answer until you get one wrong?
    <Button>click button for a suggestion if you dont have a trivia question to ask</Button>
</BaseActivity>

export const Butler = () => {
    // const players = useLocalStorage('players');
    return <BaseActivity>
        Until the next round, you gotta serve this person
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

export const SwapClothing = () => {

    const players = [""];
    const other = _.sample(players) // remember to exclude current player
    const item = _.sample(['pant/dress/skirt/short', 'socks', 'tshirt', 'glasses']);

    return <BaseActivity>
        Swap {item} with {other}
    </BaseActivity>
};

const XDrinks = (props) => {
    const gender = "apache attack helicopter"
    return <BaseActivity>
        {gender} drink!
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


export const Category = () => {

    const category = _.sample(['operating systems']);
    const player = 'todo select player';
    return <BaseActivity>
        {player} will go first. We go clockwise. The category is: {category}
    </BaseActivity>
}

export const Truth = () => {

    const player = 'todo select player';

    return <BaseActivity>
        {player} has to tell the truth. no dare here.
    </BaseActivity>

}
export const Karaoke = () => {

    // fetch song and lyrics from spotify
    // can get host to login to spotify
    return <BaseActivity>
        here are the lyrics. press play and go
    </BaseActivity>
}

export const TryNotToLaugh = () => <BaseActivity>
    You better not laugh. The timer starts now.
</BaseActivity>


export const Handcuff = () => <BaseActivity>
    We gotta tie your hands until its your next turn, sorry.
</BaseActivity>

// export default Wheel;
// 
// 
export interface ActivityProps {
    players: string[];
}
const Activities = [
    (props: ActivityProps) => <Art {...props} />,
    (props: ActivityProps) => <Butler {...props} />,
    (props: ActivityProps) => <Trivia {...props} />,
    (props: ActivityProps) => <Toast {...props} />,
    (props: ActivityProps) => <Roast {...props} />,
    (props: ActivityProps) => <Dare {...props} />,
    (props: ActivityProps) => <BlindGuess {...props} />,
    (props: ActivityProps) => <Clothing {...props} />,
    (props: ActivityProps) => <SwapClothing {...props} />,
    (props: ActivityProps) => <XDrinks {...props} />,
    (props: ActivityProps) => <Rank {...props} />,
    (props: ActivityProps) => <NeverHaveIEver {...props} />,
    (props: ActivityProps) => <Rant {...props} />,
    (props: ActivityProps) => <Act {...props} />,
    (props: ActivityProps) => <GiveMeTen {...props} />,
    (props: ActivityProps) => <Category {...props} />,
    (props: ActivityProps) => <Truth {...props} />,
    (props: ActivityProps) => <SexyDice {...props} />,
    (props: ActivityProps) => <Karaoke {...props} />,
    (props: ActivityProps) => <TryNotToLaugh {...props} />,
    (props: ActivityProps) => <Handcuff {...props} />,
]
export default Activities;