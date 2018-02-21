function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);

    });
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));