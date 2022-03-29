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

const BaseActivity = (props: any) => <Card style={{color: 'ffffff'}}>
    {props.children}
</Card>


export const Art = () => (<BaseActivity>Draw something, anything! On paper, on anyone, on anything!</BaseActivity>);

export const SexyDice = () => {

    const actions = [];
    const people = [];
    const bodyparts = [];

return <BaseActivity>
    <div>uWu</div>

    get a list of people,

    actions are 'grab', 'touch', 'fondle', 'pet', 'pat', 'bodyshot', 'lick', 'kiss', 'choke', 'nibble', 'caress'

    body parts are: 'arm', 'face', 'lips', 'shoulder', 'neck', 'bellybutton', 'ass', 'neck', 'cheek', 'leg', 'foot/feet', 'hair', 'finger'

</BaseActivity>}

export const Trivia = () => <BaseActivity>
    Time to answer some questions. Idk we need to decide on rules. Maybe answer until you get 10 right, answer until you get one wrong?
    <Button>click button for a suggestion if you don't have a trivia question to ask</Button>
</BaseActivity>

export const Butler = () => {
    // const players = useLocalStorage('players');
    return <BaseActivity>
        Until the next round, you gotta serve this person
    </BaseActivity>
};


// export const BeerPong = () => <BaseActivity> does it make sense to have this one? </BaseActivity>

export const Roast = () => <BaseActivity>Everyone take turns roasting this loser</BaseActivity>


export const Toast = () => <BaseActivity> Everyone give thiss lovely person a nice complement"</BaseActivity>

export const Dare = () => <BaseActivity>As a group decide something for this person to (voluntarily) do</BaseActivity>

export const BlindGuess = () => <BaseActivity>put something in this person's hand and make them guess what it is")</BaseActivity>

export const Clothing = (props: { minus: boolean }) => {

    return <BaseActivity>
        {props.minus ?
            "-1 clothing, Take something off"
            : "+1 clothing, You know what to do"}
    </BaseActivity>
}

export const SwapClothing = () => {

    const players = [];
    const other = _.sample(players) // remember to exclude current player
    const item = _.sample(['pant/dress/skirt/short', 'socks', 'tshirt', 'glasses']);

    return <BaseActivity>
        swap {item} with {other}
    </BaseActivity>
};

const XDrinks = (props: { gender: string }) => {
    return <BaseActivity>
        {props.gender} drink!
    </BaseActivity>
}

export const BoysDrink = XDrinks({ gender: "Boys" })
export const GirlsDrink = XDrinks({ gender: "Girls" })
export const NonBinaryDrink = XDrinks({ gender: "Nonbinary people" })

export const Rank = () => <BaseActivity>Arbitrarily rank your friends according to some arbitrary criterion. We then havbe to guess what you're ranking by</BaseActivity>

export const NeverHaveIEver = () => <BaseActivity>Never have i ever</BaseActivity>

export const Rant = () => <BaseActivity>Rant about anything you'd like</BaseActivity>

export const Act = () => <BaseActivity> You've gotta act this out. Press button for suggestion or the group comes up with one</BaseActivity>

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
    We gotta tie your hands until it's your next turn, sorry.
</BaseActivity>

// export default Wheel;