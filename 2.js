    // *    *      *        *   
    // **  **      **      **
    // ******      ***    ***
    // **  **      ****  ****
    // *    *      **********
    //             ****  ****
    //             ***    ***
    //             **      **
    //             *        *


    let n = 3
    counter = 0

    for (x = 1; x <= 3; x++) {
        console.log('*'.repeat(x) + ' '.repeat(n - 1) + '*'.repeat(x))
    }