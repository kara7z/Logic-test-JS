let destination = spaceData.destinations;
let booking = spaceData.bookings;
let user = spaceData.users;
// CHALLENGE 1: Count how many destinations we have
// RESTRICTION use Only for, while, and standard logic.
function countTotalDestinations(e) {
    return e.destinations.length;
}
// console.log(countTotalDestinations(spaceData))

// CHALLENGE 2: Find destinations that are available for booking
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAvailableDestinations(e) {
    let availableDes = [];
    let count = 0;
    for (let i = 0; i < e.length; i++) {
        if (e[i].available === true) {
            availableDes[count] = e[i];
            count++;
        }

    }
    return availableDes;

}
// console.log(getAvailableDestinations(destination))

// CHALLENGE 3: Get the very first booking in our system
// RESTRICTION use Only for, while, and standard logic.
function getFirstBooking(e) {
    return e[0];
}
// console.log(getFirstBooking(booking));

// CHALLENGE 4: Calculate how much money we've made from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function calculateTotalRevenue(e) {
    let Sum = 0;

    for (let i = 0; i < e.length; i++) {
        Sum = Sum + e[i].totalPrice;

    }
    return Sum;

}
// console.log(calculateTotalRevenue(booking))

// CHALLENGE 5: Find a user by their email address
// RESTRICTION use Only for, while, and standard logic.
function findUserByEmail(targetEmail, e) {
    for (let i = 0; i < e.length; i++) {
        if (e[i].email === targetEmail) {
            return e[i];
        }
    }
}
// console.log(findUserByEmail("robert.chen@email.com",user))


// CHALLENGE 6: Count all passengers across every booking
// RESTRICTION use Only for, while, and standard logic.
function countTotalPassengers(e) {
    let count = 0;
    for (let i = 0; i < e.length; i++) {
        for (let y = 0; y < e[i].passengers.length; y++) {
            count++
        }
    }
    return count;
}
// console.log(countTotalPassengers(booking));

// CHALLENGE 7: Group bookings by their status (confirmed, pending, etc.)
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function groupBookingsByStatus(e) {
    let confirmed = [];
    let Ccount = 0;
    let pending = [];
    let Pcount = 0;
    for (let i = 0; i < e.length; i++) {
        if (e[i].status === "confirmed") {
            confirmed[Ccount] = e[i];
            Ccount++;
        }
        if (e[i].status === "pending") {
            pending[Pcount] = e[i];
            Pcount++;
        }
    }
    return { confirmed, pending };
    // We want an object that looks like:
    // {
    //   confirmed: [booking1, booking2...],
    //   pending: [booking3...]
    // }
}
// console.log(groupBookingsByStatus(booking));


// CHALLENGE 8: Find the most expensive booking
// RESTRICTION use Only for, while, and standard logic.
function findMostExpensiveBooking(e) {
    let maxPice;
    for (let i = 0; i < e.length; i++) {
        for (let y = 0; y < e.length; y++) {
            if (e[i].totalPrice > e[y].totalPrice) {
                maxPice = e[i];
            }
            if(e[i].totalPrice < e[y].totalPrice){
                maxPice =e[y];
            }


        }

    }
    return maxPice;

}
// console.log(findMostExpensiveBooking(booking));

// CHALLENGE 9: Create a simple summary of all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getBookingSummary() {
    // We want to make each booking simpler - just show:
    // id, destination, number of passengers, and total price

}

// CHALLENGE 10: Update a booking's status
// RESTRICTION use Only for, while, and standard logic.
function updateBookingStatus(bookingId, newStatus) {


}


// CHALLENGE 11: Calculate how much money each destination has made
// RESTRICTION use Only for, while, and standard logic.
function calculateRevenueByDestination() {
    // We want an object that shows total revenue for each destination:
    // { 'Moon Base Alpha': 195000, 'Mars Colony One': 250000 }


}

// CHALLENGE 12: Find which user has made the most bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function findUserWithMostBookings() {


}

// CHALLENGE 13: Find bookings between specific dates
// RESTRICTION use Only for, while, and standard logic.
function filterBookingsByDate(startDate, endDate) {


}

// CHALLENGE 14: Get a list of all passenger names from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAllPassengerNames() {


}

// CHALLENGE 15: Add a new booking with proper validation
// RESTRICTION use Only for, while, and standard logic.
function addNewBooking(bookingData) {


}

// ========================
// SOLUTIONS' TEST
// ========================


async function testAllChallenges() {

    await loadData();

    console.log('TESTing !\n');

    console.log('LEVEL 1:');
    console.log('1. How many destinations?', countTotalDestinations());
    console.log('2. Available destinations:', getAvailableDestinations());
    console.log('3. First booking ever:', getFirstBooking());
    console.log('4. Total money made:', calculateTotalRevenue());
    console.log('5. Find John Smith:', findUserByEmail('john.smith@email.com'));

    console.log('\nLEVEL 2:');
    console.log('6. Total passengers:', countTotalPassengers());
    console.log('7. Bookings by status:', groupBookingsByStatus());
    console.log('8. Most expensive trip:', findMostExpensiveBooking());
    console.log('9. Booking summaries:', getBookingSummary());
    console.log('10. Update booking:', updateBookingStatus('BK001', 'cancelled'));

    console.log('\nLEVEL 3:');
    console.log('11. Money per destination:', calculateRevenueByDestination());
    console.log('12. Most bookings by:', findUserWithMostBookings());
    console.log('13. March bookings:', filterBookingsByDate('2024-03-01', '2024-04-01'));
    console.log('14. All passenger names:', getAllPassengerNames());

    // Try adding a new booking
    try {
        const newBooking = {
            userId: 'user456',
            destinationId: 2,
            destination: 'Mars Colony One',
            package: 'basic',
            passengers: [{ name: 'Bob Wilson', age: 45 }],
            travelDate: '2024-07-01',
            returnDate: '2024-07-03',
            totalPrice: 250000,
            status: 'pending'
        };
        console.log('15. Add new booking:', addNewBooking(newBooking));
    } catch (error) {
        console.log('15. Failed to add booking:', error.message);
    }
}


window.testAllChallenges = testAllChallenges;
window.spaceData = spaceData;

// Some tips for success:
// 1. Start with the easy challenges first
// 2. Use console.log to see what data you're working with
// 3. For restricted challenges, think "how would I do this manually?"
// 4. Test each function as you complete it
// 5. Don't worry if it takes time - learning is a process!

// console.log('Pro tip: Open browser console and type testAllChallenges() to check your work!');
// testAllChallenges();