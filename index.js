function scuberGreetingForFeet(distance) {
    // Works, but is kinda hacky I feel
    // switch (true) {
    //     case distance <= 400:
    //         return 'This one is on me!';
    //         break;

    //     case distance <= 2000:
    //         // Nothing to test for case
    //         break;

    //     case distance <= 2500:
    //         return 'I will gladly take your thirty bucks.';
    //         break;

    //     default:
    //         return 'No can do.';
    //         break;
    // }
    if (distance <= 400) {
        return 'This one is on me!';
    } else if (distance > 2500) {
        return 'No can do.';
    } else {
        return 'I will gladly take your thirty bucks.';
    }
}

function ternaryCheckCity(city){
    if (city === 'NYC') {
        return "Ok, sounds good.";
    } else {
        return "No go.";
  }
}

function switchOnCharmFromTip(tip){
    switch (tip) {
        case 'generous':
            return 'Thank you so much.';
            break;
        case 'not as generous':
            return 'Thank you.';
            break;
        case 'thanks for everything':
            return 'Bye.';
            break;
}
}
